/** @type {CharData} */
let characterData       = [];   // Initial character data set used.
/** @type {CharData} */
let characterDataToSort = [];   // Character data set after filtering.
/** @type {Options} */
let options             = [];   // Initial option set used.

let currentVersion      = '';   // Which version of characterData and options are used.

/** @type {(boolean|boolean[])[]} */
let optTaken  = [];             // Records which options are set.

/** Save Data. Concatenated into array, joined into string (delimited by '|') and compressed with lz-string. */
let timestamp = 0;        // savedata[0]      (Unix time when sorter was started, used as initial PRNG seed and in dataset selection)
let timeTaken = 0;        // savedata[1]      (Number of ms elapsed when sorter ends, used as end-of-sort flag and in filename generation)
let choices   = '';       // savedata[2]      (String of '0', '1' and '2' that records what sorter choices are made)
let optStr    = '';       // savedata[3]      (String of '0' and '1' that denotes top-level option selection)
let suboptStr = '';       // savedata[4...n]  (String of '0' and '1' that denotes nested option selection, separated by '|')
let timeError = false;    // Shifts entire savedata array to the right by 1 and adds an empty element at savedata[0] if true.

/** Intermediate sorter data. */
let sortedIndexList = [];
let recordDataList  = [];
let parentIndexList = [];
let tiedDataList    = [];

let leftIndex       = 0;
let leftInnerIndex  = 0;
let rightIndex      = 0;
let rightInnerIndex = 0;
let battleNo        = 1;
let sortedNo        = 0;
let pointer         = 0;


/** Miscellaneous sorter data that doesn't need to be saved for undo(). */
let finalCharacters = [];
let loading         = false;
let totalBattles    = 0;
let sorterURL       = window.location.host + window.location.pathname;
let storedSaveType  = localStorage.getItem(`${sorterURL}_saveType`);

/** Initialize script. */
function init() {

  /** Define button behavior. */
  document.querySelector('.starting.start.button').addEventListener('click', start);
  document.querySelector('.starting.load.button').addEventListener('click', loadProgress);

  document.querySelector('.left.sort.image').addEventListener('click', () => pick('left'));
  document.querySelector('.right.sort.image').addEventListener('click', () => pick('right'));
  
  document.querySelector('.sorting.tie.button').addEventListener('click', () => pick('tie'));
  document.querySelector('.sorting.undo.button').addEventListener('click', (ev) => {
    if (ev.target.closest('.redo-half')) redo(); else undo();
  });
  document.querySelector('.sorting.save.button').addEventListener('click', () => saveProgress('Progress'));
  
  document.querySelector('.finished.save.button').addEventListener('click', () => saveProgress('Last Result'));
  document.querySelector('.finished.getimg.button').addEventListener('click', generateImage);
  document.querySelector('.finished.list.button').addEventListener('click', generateTextList);

  document.querySelector('.clearsave').addEventListener('click', clearProgress);

  /**
   * Keyboard controls. Primary: A / D pick, Space tie, Z undo, Enter save.
   * Alternates: arrow keys for pick and tie, Backspace for undo.
   * keydown (not keypress) so arrows and Backspace register; page scrolling on Space / arrows is suppressed while sorting.
   */
  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.altKey || ev.metaKey) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
    const key = ev.key.length === 1 ? ev.key.toLowerCase() : ev.key;

    /** If sorting is in progress. */
    if (timestamp && !timeTaken && !loading && choices.length === battleNo - 1) {
      if ([' ', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'Backspace'].includes(key)) ev.preventDefault();
      if (ev.repeat) return;
      switch (key) {
        case 'a': case 'ArrowLeft':         pick('left'); break;
        case 'd': case 'ArrowRight':        pick('right'); break;
        case ' ': case 'ArrowDown':         pick('tie'); break;
        case 'z': case 'Backspace':         undo(); break;
        case 'x':                           redo(); break;
        case 'Enter':                       saveProgress('Progress'); break;
        default: break;
      }
    }
    /** If sorting has ended. */
    else if (timeTaken && choices.length === battleNo - 1) {
      switch (key) {
        case '1': saveProgress('Last Result'); break;
        case '2': generateImage(); break;
        case '3': generateTextList(); break;
        default: break;
      }
    } else { // If sorting hasn't started yet.
      switch (key) {
        case '1': case 'Enter': start(); break;
        case '2': case 'l':     loadProgress(); break;
        default: break;
      }
    }
  });

  document.querySelector('.image.selector').insertAdjacentElement('beforeend', document.createElement('select'));

  /** Initialize image quantity selector for results. */
  [0, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250].forEach(i => {
    const select = document.createElement('option');
    select.value = i;
    select.text = i;
    document.querySelector('.image.selector > select').insertAdjacentElement('beforeend', select);
  });

  document.querySelector('.image.selector > select').addEventListener('input', (e) => {
    const imageNum = Number(e.target.value);
    try { localStorage.setItem('portraitCount', String(imageNum)); } catch (err) {}
    result(imageNum);
  });

  /** Re-flow the result columns into bands when the window changes size. */
  let resultResizeTimer = 0;
  window.addEventListener('resize', () => {
    if (!timeTaken) return;
    clearTimeout(resultResizeTimer);
    resultResizeTimer = setTimeout(() => bandResults(), 150);
  });

  /** Show load button if save data exists. */
  if (storedSaveType) {
    document.querySelector('.starting.load.button > span').insertAdjacentText('beforeend', storedSaveType);
    document.querySelectorAll('.starting.button').forEach(el => {
      el.style['grid-row'] = el.classList.contains('load') ? 'span 2' : 'span 4';
      el.style.display = 'flex';
    });
  }

  setLatestDataset();

  /** Decode query string if available. */
  if (window.location.search.slice(1) !== '') decodeQuery();

  /** Debug: open the page with #finish to run a whole sort with random picks and land on the results. */
  document.querySelector('.debugfinish').addEventListener('click', debugFinish);
  if (window.location.hash === '#finish') debugFinish();
}

/** Debug helper: start (if needed), then auto-pick at random until the results screen shows. */
async function debugFinish() {
  if (!timestamp) start();
  while (loading) { await new Promise(r => setTimeout(r, 50)); }
  let guard = 0;
  while (!timeTaken && guard++ < 20000) {
    pick(['left', 'right', 'tie'][Math.floor(Math.random() * 3)]);
  }
}

/** Read the option checkboxes and return the filtered character list. Also records optTaken/optStr/suboptStr for save data. */
function selectCharacters() {
  let list = characterData.slice(0);

  /** Check selected options and convert to boolean array form. */
  optTaken = [];

  options.forEach(opt => {
    if ('sub' in opt) {
      if (!document.getElementById(`cbgroup-${opt.key}`).checked) optTaken.push(false);
      else {
        const suboptArray = opt.sub.reduce((arr, val, idx) => {
          arr.push(document.getElementById(`cb-${opt.key}-${idx}`).checked);
          return arr;
        }, []);
        optTaken.push(suboptArray);
      }
    } else { optTaken.push(document.getElementById(`cb-${opt.key}`).checked); }
  });

  /** Convert boolean array form to string form. */
  optStr    = '';
  suboptStr = '';

  optStr = optTaken
    .map(val => !!val)
    .reduce((str, val) => {
      str += val ? '1' : '0';
      return str;
    }, optStr);
  optTaken.forEach(val => {
    if (Array.isArray(val)) {
      suboptStr += '|';
      suboptStr += val.reduce((str, val) => {
        str += val ? '1' : '0';
        return str;
      }, '');
    }
  });

  /** Filter out deselected nested criteria and remove selected criteria. */
  options.forEach((opt, index) => {
    if ('sub' in opt) {
      if (optTaken[index]) {
        const subArray = optTaken[index].reduce((subList, subBool, subIndex) => {
          if (subBool) { subList.push(options[index].sub[subIndex].key); }
          return subList;
        }, []);
        list = list.filter(char => {
          if (!(opt.key in char.opts)) console.warn(`Warning: ${opt.key} not set for ${char.name}.`);
          return opt.key in char.opts && char.opts[opt.key].some(key => subArray.includes(key));
        });
      }
    } else if (optTaken[index]) {
      list = list.filter(char => !char.opts[opt.key]);
    }
  });

  return list;
}

/** Begin sorting. */
function start() {
  characterDataToSort = selectCharacters();
  undoStack = [];
  redoStack = [];
  updateUndoButtons();

  if (characterDataToSort.length < 2) {
    alert('Cannot sort with less than two characters. Please reselect.');
    return;
  }

  /** Shuffle character array with timestamp seed. */
  timestamp = timestamp || new Date().getTime();
  if (new Date(timestamp) < new Date(currentVersion)) { timeError = true; }
  Math.seedrandom(timestamp);

  characterDataToSort = characterDataToSort
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1]);

  /**
   * tiedDataList will keep a record of indexes on which characters are equal (i.e. tied) 
   * to another one. recordDataList will have an interim list of sorted elements during
   * the mergesort process.
   */

  recordDataList  = characterDataToSort.map(() => 0);
  tiedDataList    = characterDataToSort.map(() => -1);

  /** 
   * Put a list of indexes that we'll be sorting into sortedIndexList. These will refer back
   * to characterDataToSort.
   * 
   * Begin splitting each element into little arrays and spread them out over sortedIndexList
   * increasing its length until it become arrays of length 1 and you can't split it anymore. 
   * 
   * parentIndexList indicates each element's parent (i.e. where it was split from), except 
   * for the first element, which has no parent.
   */

  sortedIndexList[0] = characterDataToSort.map((val, idx) => idx);
  parentIndexList[0] = -1;

  let midpoint = 0;   // Indicates where to split the array.
  let marker   = 1;   // Indicates where to place our newly split array.

  for (let i = 0; i < sortedIndexList.length; i++) {
    if (sortedIndexList[i].length > 1) {
      let parent = sortedIndexList[i];
      midpoint = Math.ceil(parent.length / 2);

      sortedIndexList[marker] = parent.slice(0, midpoint);              // Split the array in half, and put the left half into the marked index.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Increment the marker to put the right half into.

      sortedIndexList[marker] = parent.slice(midpoint, parent.length);  // Put the right half next to its left half.
      totalBattles += sortedIndexList[marker].length;                   // The result's length will add to our total number of comparisons.
      parentIndexList[marker] = i;                                      // Record where it came from.
      marker++;                                                         // Rinse and repeat, until we get arrays of length 1. This is initialization of merge sort.
    }
  }

  leftIndex  = sortedIndexList.length - 2;    // Start with the second last value and...
  rightIndex = sortedIndexList.length - 1;    // the last value in the sorted list and work our way down to index 0.

  leftInnerIndex  = 0;                        // Inner indexes, because we'll be comparing the left array
  rightInnerIndex = 0;                        // to the right array, in order to merge them into one sorted array.

  /** Disable all checkboxes and hide/show appropriate parts while we preload the images. */
  document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.disabled = true);
  document.querySelectorAll('.intro, .picker, .morefilters, .selection, .info').forEach(el => el.hidden = true);
  document.querySelector('.sorter').classList.add('live');
  document.querySelectorAll('.starting.button').forEach(el => el.style.display = 'none');
  document.querySelector('.loading.button').style.display = 'block';
  document.querySelector('.progress').style.display = 'block';
  loading = true;

  preloadImages().then(() => {
    loading = false;
    document.querySelector('.loading.button').style.display = 'none';
    document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'flex');
    document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'block');
    display();
  });
}

/** Displays the current state of the sorter. */
function display() {
  const percent         = Math.floor(sortedNo * 100 / totalBattles);
  const leftCharIndex   = sortedIndexList[leftIndex][leftInnerIndex];
  const rightCharIndex  = sortedIndexList[rightIndex][rightInnerIndex];
  const leftChar        = characterDataToSort[leftCharIndex];
  const rightChar       = characterDataToSort[rightCharIndex];

  /** "Scarlet: Black Shadow" becomes the name on one line and the alt name in small type below. */
  const charNameDisp = name => {
    const [base, ...rest] = name.split(': ');
    const sub = rest.join(': ');
    return `<p title="${name}">${base}${sub ? `<small>${sub}</small>` : ''}</p>`;
  };

  progressBar(`Battle ${battleNo} of ~${totalBattles}`, percent);

  document.querySelector('.left.sort.image').src = leftChar.img;
  document.querySelector('.right.sort.image').src = rightChar.img;

  

  document.querySelector('.left.sort.text').innerHTML = charNameDisp(leftChar.name);
  document.querySelector('.right.sort.text').innerHTML = charNameDisp(rightChar.name);

  /** Autopick if choice has been given. */
  if (choices.length !== battleNo - 1) {
    switch (Number(choices[battleNo - 1])) {
      case 0: pick('left'); break;
      case 1: pick('right'); break;
      case 2: pick('tie'); break;
      default: break;
    }
  } else { saveProgress('Autosave'); }
}

/**
 * Sort between two character choices or tie.
 * 
 * @param {'left'|'right'|'tie'} sortType
 */
function pick(sortType) {
  if ((timeTaken && choices.length === battleNo - 1) || loading) { return; }
  else if (!timestamp) { return start(); }

  /** Flash the chosen side (both on a tie) so each pick is visibly acknowledged. */
  const flash = side => {
    const el = document.querySelector(`.port.${side}`);
    if (!el) return;
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  };
  if (sortType === 'left' || sortType === 'tie') flash('left');
  if (sortType === 'right' || sortType === 'tie') flash('right');

  pushUndo(sortType);
  redoStack = [];
  updateUndoButtons();

  /** 
   * For picking 'left' or 'right':
   * 
   * Input the selected character's index into recordDataList. Increment the pointer of
   * recordDataList. Then, check if there are any ties with this character, and keep
   * incrementing until we find no more ties. 
   */
  switch (sortType) {
    case 'left': {
      if (choices.length === battleNo - 1) { choices += '0'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      break;
    }
    case 'right': {
      if (choices.length === battleNo - 1) { choices += '1'; }
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }

  /** 
   * For picking 'tie' (i.e. heretics):
   * 
   * Proceed as if we picked the 'left' character. Then, we record the right character's
   * index value into the list of ties (at the left character's index) and then proceed
   * as if we picked the 'right' character.
   */
    case 'tie': {
      if (choices.length === battleNo - 1) { choices += '2'; }
      recordData('left');
      while (tiedDataList[recordDataList[pointer - 1]] != -1) {
        recordData('left');
      }
      tiedDataList[recordDataList[pointer - 1]] = sortedIndexList[rightIndex][rightInnerIndex];
      recordData('right');
      while (tiedDataList[recordDataList [pointer - 1]] != -1) {
        recordData('right');
      }
      break;
    }
    default: return;
  }

  /**
   * Once we reach the limit of the 'right' character list, we 
   * insert all of the 'left' characters into the record, or vice versa.
   */
  const leftListLen = sortedIndexList[leftIndex].length;
  const rightListLen = sortedIndexList[rightIndex].length;

  if (leftInnerIndex < leftListLen && rightInnerIndex === rightListLen) {
    while (leftInnerIndex < leftListLen) {
      recordData('left');
    }
  } else if (leftInnerIndex === leftListLen && rightInnerIndex < rightListLen) {
    while (rightInnerIndex < rightListLen) {
      recordData('right');
    }
  }

  /**
   * Once we reach the end of both 'left' and 'right' character lists, we can remove 
   * the arrays from the initial mergesort array, since they are now recorded. This
   * record is a sorted version of both lists, so we can replace their original 
   * (unsorted) parent with a sorted version. Purge the record afterwards.
   */
  if (leftInnerIndex === leftListLen && rightInnerIndex === rightListLen) {
    for (let i = 0; i < leftListLen + rightListLen; i++) {
      sortedIndexList[parentIndexList[leftIndex]][i] = recordDataList[i];
    }
    sortedIndexList.pop();
    sortedIndexList.pop();
    leftIndex = leftIndex - 2;
    rightIndex = rightIndex - 2;
    leftInnerIndex = 0;
    rightInnerIndex = 0;

    sortedIndexList.forEach((val, idx) => recordDataList[idx] = 0);
    pointer = 0;
  }

  /**
   * If, after shifting the 'left' index on the sorted list, we reach past the beginning
   * of the sorted array, that means the entire array is now sorted. The original unsorted
   * array in index 0 is now replaced with a sorted version, and we will now output this.
   */
  if (leftIndex < 0) {
    timeTaken = timeTaken || new Date().getTime() - timestamp;

    progressBar('Completed!', 100);

    /** Save the finished run silently, so "Load Last Result" brings the results back rather than the final battle. */
    saveProgress('Last Result', true);
    result();
  } else {
    battleNo++;
    display();
  }
}

/**
 * Records data in recordDataList.
 * 
 * @param {'left'|'right'} sortType Record from the left or the right character array.
 */
function recordData(sortType) {
  if (sortType === 'left') {
    recordDataList[pointer] = sortedIndexList[leftIndex][leftInnerIndex];
    leftInnerIndex++;
  } else {
    recordDataList[pointer] = sortedIndexList[rightIndex][rightInnerIndex];
    rightInnerIndex++;
  }
  
  pointer++;
  sortedNo++;
}

/**
 * Modifies the progress bar.
 * 
 * @param {string} indicator
 * @param {number} percentage
 */
function progressBar(indicator, percentage) {
  document.querySelector('.progressbattle').innerHTML = indicator;
  document.querySelector('.progressfill').style.width = `${percentage}%`;
  document.querySelector('.progresstext').innerHTML = `${percentage}%`;
}

/**
 * Shows the result of the sorter.
 * 
 * @param {number} [imageNum=3] Number of images to display. Defaults to 3.
 */
/**
 * How many portraits to show. The user's dropdown choice is remembered; before they ever
 * touch it, the count follows the window width (phones 10, laptops 20, wide screens 30).
 */
function defaultPortraitCount() {
  try {
    const saved = localStorage.getItem('portraitCount');
    if (saved !== null && saved !== '') return Number(saved);
  } catch (err) {}
  const w = window.innerWidth;
  return w < 700 ? 10 : w < 1500 ? 20 : 30;
}

/** One-line description of what was ranked, from the option checkboxes. */
function selectionSummary() {
  const on = key => { const el = document.getElementById(`cb-${key}`); return el ? el.checked : null; };
  const parts = [];
  const alts = ['SSRalt', 'SRalt', 'overspecbase'].map(on).filter(v => v !== null);
  if (alts.length && alts.every(Boolean)) parts.push('base forms only');
  else if (alts.length && alts.every(v => !v)) parts.push('all forms');
  else if (alts.length) parts.push('mixed forms');
  if (on('collab')) parts.push('no collabs');
  if (on('rikker')) parts.push('no R units');
  if (on('aprilfools')) parts.push('no April Fools');
  const groups = options.filter(opt => 'sub' in opt && document.getElementById(`cbgroup-${opt.key}`).checked)
    .map(opt => opt.name.replace(/^Filter by /, '').toLowerCase() + ' filter');
  return parts.concat(groups).join(', ');
}

function result(imageNum = defaultPortraitCount()) {
  document.querySelectorAll('.finished.button').forEach(el => el.style.display = 'flex');
  document.querySelector('.image.selector').style.display = 'block';

  document.querySelectorAll('.sorting.button').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.sort.text').forEach(el => el.style.display = 'none');
  document.querySelector('.options').style.display = 'none';
  document.querySelector('.info').style.display = 'none';

  const select = document.querySelector('.image.selector > select');
  if (![...select.options].some(o => Number(o.value) === imageNum)) {
    const extra = document.createElement('option'); extra.value = imageNum; extra.text = imageNum;
    select.appendChild(extra);
  }
  select.value = String(imageNum);

  const finished = new Date(timestamp + timeTaken);
  const when = finished.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  const picks = choices.length;
  const summary = `
    <div class="summary">
      <div class="big">Results</div>
      <div class="meta"><b>${characterDataToSort.length}</b> Nikkes &middot; ${selectionSummary()} &middot; <b>${picks}</b> picks in <b>${msToReadableTime(timeTaken) || 'under a second'}</b> &middot; ${when}
        &middot; <a href="${location.protocol}//${sorterURL}">Do another sorter?</a></div>
    </div>`;

  const tile = (char, rank, tie) => {
    const [base, ...rest] = char.name.split(': ');
    const sub = rest.join(': ');
    return `<div class="tile ${rank <= 5 ? 'p' + rank : ''}"><div class="rk ${tie ? 'tie' : ''}">${rank}</div>
      <div class="pic"><img src="${char.img}" alt=""></div>
      <div class="nm" title="${char.name}">${base}${sub ? `<small>${sub}</small>` : ''}</div></div>`;
  };
  const row = (char, rank, tie) => {
    const [base, ...rest] = char.name.split(': ');
    return `<div class="trow ${tie ? 'tie' : ''}"><b>${rank}</b><span>${base}${rest.length ? ` <small>${rest.join(': ')}</small>` : ''}</span></div>`;
  };

  /** Walk the final order, working out ranks (ties share a rank). */
  let rankNum = 1;
  let tiedRankNum = 1;
  const finalSortedIndexes = sortedIndexList[0].slice(0);
  const entries = [];
  finalCharacters = [];

  characterDataToSort.forEach((val, idx) => {
    const characterIndex = finalSortedIndexes[idx];
    const character = characterDataToSort[characterIndex];
    entries.push({ character, rank: rankNum });
    finalCharacters.push({ rank: rankNum, name: character.name });

    if (idx < characterDataToSort.length - 1) {
      if (tiedDataList[characterIndex] === finalSortedIndexes[idx + 1]) {
        tiedRankNum++;            // Indicates how many people are tied at the same rank.
      } else {
        rankNum += tiedRankNum;   // Add it to the actual ranking, then reset it.
        tiedRankNum = 1;          // The default value is 1, so it increments as normal if no ties.
      }
    }
  });
  const rankCount = {};
  entries.forEach(e => rankCount[e.rank] = (rankCount[e.rank] || 0) + 1);

  /** Portrait columns of five, then text columns sized to match. */
  const ROWS = 5;
  const pics = entries.slice(0, imageNum), rest = entries.slice(imageNum);
  let cols = '';
  for (let i = 0; i < pics.length; i += ROWS) {
    cols += `<div class="col pics">${pics.slice(i, i + ROWS).map(e => tile(e.character, e.rank, rankCount[e.rank] > 1)).join('')}</div>`;
  }
  const resultTable = document.querySelector('.results');
  resultTable.innerHTML = summary + `<div class="grid cols"><div class="band">${cols}</div></div>`;

  const picCol = resultTable.querySelector('.col.pics');
  const perText = picCol ? Math.max(5, Math.floor((picCol.offsetHeight - 16) / 22)) : 40;
  for (let i = 0; i < rest.length; i += perText) {
    cols += `<div class="col text">${rest.slice(i, i + perText).map(e => row(e.character, e.rank, rankCount[e.rank] > 1)).join('')}</div>`;
  }
  resultTable.querySelector('.band').innerHTML = cols;
  bandResults();
}

/** Split the wrapped rows of result columns into labelled bands, so a wrap never reads as the next column. */
function bandResults() {
  const grid = document.querySelector('.results .grid');
  if (!grid) return;
  const cols = [...grid.querySelectorAll('.col')];
  grid.innerHTML = `<div class="band"></div>`;
  const first = grid.firstElementChild;
  cols.forEach(c => first.appendChild(c));

  const groups = []; let top = -1;
  cols.forEach(c => { if (c.offsetTop !== top) { top = c.offsetTop; groups.push([]); } groups[groups.length - 1].push(c); });
  if (groups.length < 2) return;

  grid.innerHTML = '';
  groups.forEach((g, i) => {
    if (i > 0) {
      const from = g[0].querySelector('.rk, .trow b'), to = g[g.length - 1].querySelector('.tile:last-child .rk, .trow:last-child b');
      const head = document.createElement('div');
      head.className = 'bandhead';
      head.textContent = `${from.textContent} – ${to.textContent}`;
      grid.appendChild(head);
    }
    const band = document.createElement('div');
    band.className = 'band';
    g.forEach(c => band.appendChild(c));
    grid.appendChild(band);
  });
}

/** Undo previous choice. */
/** Snapshot of everything a pick changes. Kept on a stack so Undo can step back as far as the run started. */
let undoStack = [];
let redoStack = [];   /* picks that were undone, newest last; any new pick clears it */
const UNDO_LIMIT = 2000;

function pushUndo(sortType) {
  undoStack.push({
    sortType,
    sortedIndexList: sortedIndexList.map(a => a.slice(0)),
    recordDataList:  recordDataList.slice(0),
    parentIndexList: parentIndexList.slice(0),
    tiedDataList:    tiedDataList.slice(0),
    leftIndex, leftInnerIndex, rightIndex, rightInnerIndex, battleNo, sortedNo, pointer,
    choicesLen: choices.length,
  });
  if (undoStack.length > UNDO_LIMIT) undoStack.shift();
}

function undo() {
  if (timeTaken || !undoStack.length) { return; }
  const s = undoStack.pop();

  choices = choices.slice(0, s.choicesLen);

  sortedIndexList = s.sortedIndexList;
  recordDataList  = s.recordDataList;
  parentIndexList = s.parentIndexList;
  tiedDataList    = s.tiedDataList;

  leftIndex       = s.leftIndex;
  leftInnerIndex  = s.leftInnerIndex;
  rightIndex      = s.rightIndex;
  rightInnerIndex = s.rightInnerIndex;
  battleNo        = s.battleNo;
  sortedNo        = s.sortedNo;
  pointer         = s.pointer;

  redoStack.push(s.sortType);
  updateUndoButtons();
  display();
}

/** Re-apply the most recently undone pick. */
function redo() {
  if (timeTaken || !redoStack.length || loading) { return; }
  const rest = redoStack.slice(0, -1);
  const sortType = redoStack[redoStack.length - 1];
  pick(sortType);           // pick() clears redoStack, so put the rest back afterwards
  redoStack = rest;
  updateUndoButtons();
}

/** Show the Redo half of the Undo button only while there is something to redo. */
function updateUndoButtons() {
  const btn = document.querySelector('.sorting.undo.button');
  if (btn) btn.classList.toggle('has-redo', redoStack.length > 0);
}

/** 
 * Save progress to local browser storage.
 * 
 * @param {'Autosave'|'Progress'|'Last Result'} saveType
*/
function saveProgress(saveType, silent = false) {
  const saveData = generateSavedata();

  localStorage.setItem(`${sorterURL}_saveData`, saveData);
  localStorage.setItem(`${sorterURL}_saveType`, saveType);

  if (saveType !== 'Autosave' && !silent) {
    const saveURL = `${location.protocol}//${sorterURL}?${saveData}`;
    const inProgressText = 'You may click Load Progress after this to resume, or use this URL.';
    const finishedText = 'You may use this URL to share this result, or click Load Last Result to view it again.';

    window.prompt(saveType === 'Last Result' ? finishedText : inProgressText, saveURL);
  }
}

/**
 * Load progress from local browser storage.
*/
function loadProgress() {
  const saveData = localStorage.getItem(`${sorterURL}_saveData`);

  if (saveData) decodeQuery(saveData);
}

/** 
 * Clear progress from local browser storage.
*/
function clearProgress() {
  storedSaveType = '';

  localStorage.removeItem(`${sorterURL}_saveData`);
  localStorage.removeItem(`${sorterURL}_saveType`);
  localStorage.removeItem('portraitCount');

  document.querySelectorAll('.starting.start.button').forEach(el => el.style['grid-row'] = 'span 6');
  document.querySelectorAll('.starting.load.button').forEach(el => el.style.display = 'none');
}

function generateImage() {
  const timeFinished = timestamp + timeTaken;
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const filename = 'sort-' + (new Date(timeFinished - tzoffset)).toISOString().slice(0, -5).replace('T', '(') + ').png';
  const imgButton = document.querySelector('.finished.getimg.button');

  /** Opened from disk, browsers refuse to read local images back out of a canvas. Say so plainly. */
  if (location.protocol === 'file:') {
    imgButton.innerHTML = 'Image export only works on the live site or a local web server, not when index.html is opened from disk';
    return;
  }

  /** Show that something is happening: a wide results grid can take a few seconds to render. */
  imgButton.removeEventListener('click', generateImage);
  imgButton.innerHTML = 'Generating…';

  /**
   * Lay the results out as one wide band for the capture, so the image never wraps even if the
   * window did, then put the on-screen layout back. The page background is painted in so dark
   * mode results stay readable.
   */
  const results = document.querySelector('.results');
  results.classList.add('export');
  bandResults();
  html2canvas(results, { backgroundColor: getComputedStyle(document.body).backgroundColor, width: results.scrollWidth, windowWidth: results.scrollWidth + 64 }).finally(() => {
    results.classList.remove('export');
    bandResults();
  }).then(canvas => new Promise((resolve, reject) => {
    /** A blob URL instead of a data URL: browsers cap data-URL downloads at a few MB, which a wide results image exceeds. */
    canvas.toBlob(blob => blob ? resolve(URL.createObjectURL(blob)) : reject(new Error('canvas could not be encoded')), 'image/png');
  })).then(blobURL => {
    const resetButton = document.createElement('a');

    /** Start the download straight away, and leave a link in case the browser blocked it. */
    const auto = document.createElement('a');
    auto.href = blobURL; auto.download = filename; document.body.appendChild(auto); auto.click(); auto.remove();

    imgButton.innerHTML = '';
    imgButton.insertAdjacentHTML('beforeend', `<a href="${blobURL}" download="${filename}">Download again</a><br><br>`);

    resetButton.insertAdjacentText('beforeend', 'Reset');
    resetButton.addEventListener('click', (event) => {
      imgButton.addEventListener('click', generateImage);
      imgButton.innerHTML = 'Generate Image';
      event.stopPropagation();
    });
    imgButton.insertAdjacentElement('beforeend', resetButton);
  }).catch(err => {
    console.error('Image generation failed', err);
    imgButton.innerHTML = `Image failed: ${(err && err.message) || err}`;
    imgButton.addEventListener('click', generateImage);
  });
}

function generateTextList() {
  const data = finalCharacters.reduce((str, char) => {
    str += `${char.rank}. ${char.name}<br>`;
    return str;
  }, '');
  const oWindow = window.open("", "", "height=640,width=480");
  oWindow.document.write(data);
}

function generateSavedata() {
  const saveData = `${timeError?'|':''}${timestamp}|${timeTaken}|${choices}|${optStr}${suboptStr}`;
  return LZString.compressToEncodedURIComponent(saveData);
}

/** Retrieve latest character data and options from dataset. */
function setLatestDataset() {
  /** Set some defaults. */
  timestamp = 0;
  timeTaken = 0;
  choices   = '';

  const latestDateIndex = Object.keys(dataSet)
    .map(date => new Date(date))
    .reduce((latestDateIndex, currentDate, currentIndex, array) => {
      return currentDate > array[latestDateIndex] ? currentIndex : latestDateIndex;
    }, 0);
  currentVersion = Object.keys(dataSet)[latestDateIndex];

  characterData = dataSet[currentVersion].characterData;
  options = dataSet[currentVersion].options;

  populateOptions();
}

/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip, checked = true, disabled = false) => {
    return `<div><label title="${tooltip?tooltip:name}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip, checked = true) => {
    return `<div class="large option"><label title="${tooltip?tooltip:name}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  /** Clear out any previous options. */
  optList.innerHTML = '';

  /** Insert sorter options and set grouped option behavior. */
  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      opt.sub.forEach((subopt, subindex) => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

      const groupbox = document.getElementById(`cbgroup-${opt.key}`);

      groupbox.parentElement.addEventListener('click', () => {
        opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${subindex}`).checked = true; }
        });
      });
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });

  if (typeof buildPicker === 'function') buildPicker();
}

/**
 * Decodes compressed shareable link query string.
 * @param {string} queryString
 */
function decodeQuery(queryString = window.location.search.slice(1)) {
  let successfulLoad;

  try {
    /** 
     * Retrieve data from compressed string. 
     * @type {string[]}
     */
    const decoded = LZString.decompressFromEncodedURIComponent(queryString).split('|');
    if (!decoded[0]) {
      decoded.splice(0, 1);
      timeError = true;
    }

    timestamp = Number(decoded.splice(0, 1)[0]);
    timeTaken = Number(decoded.splice(0, 1)[0]);
    choices   = decoded.splice(0, 1)[0];

    const optDecoded    = decoded.splice(0, 1)[0];
    const suboptDecoded = decoded.slice(0);

    /** 
     * Get latest data set version from before the timestamp.
     * If timestamp is before or after any of the datasets, get the closest one.
     * If timestamp is between any of the datasets, get the one in the past, but if timeError is set, get the one in the future.
     */
    const seedDate = { str: timestamp, val: new Date(timestamp) };
    const dateMap = Object.keys(dataSet)
      .map(date => {
        return { str: date, val: new Date(date) };
      })
    const beforeDateIndex = dateMap
      .reduce((prevIndex, currDate, currIndex) => {
        return currDate.val < seedDate.val ? currIndex : prevIndex;
      }, -1);
    const afterDateIndex = dateMap.findIndex(date => date.val > seedDate.val);
    
    if (beforeDateIndex === -1) {
      currentVersion = dateMap[afterDateIndex].str;
    } else if (afterDateIndex === -1) {
      currentVersion = dateMap[beforeDateIndex].str;
    } else {
      currentVersion = dateMap[timeError ? afterDateIndex : beforeDateIndex].str;
    }

    options = dataSet[currentVersion].options;
    characterData = dataSet[currentVersion].characterData;

    /** Populate option list and decode options selected. */
    populateOptions();

    let suboptDecodedIndex = 0;
    options.forEach((opt, index) => {
      if ('sub' in opt) {
        const optIsTrue = optDecoded[index] === '1';
        document.getElementById(`cbgroup-${opt.key}`).checked = optIsTrue;
        opt.sub.forEach((subopt, subindex) => {
          const subIsTrue = optIsTrue ? suboptDecoded[suboptDecodedIndex][subindex] === '1' : true;
          document.getElementById(`cb-${opt.key}-${subindex}`).checked = subIsTrue;
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = optIsTrue;
        });
        suboptDecodedIndex = suboptDecodedIndex + (optIsTrue ? 1 : 0);
      } else { document.getElementById(`cb-${opt.key}`).checked = optDecoded[index] === '1'; }
    });

    if (typeof syncPicker === 'function') syncPicker();
    successfulLoad = true;
  } catch (err) {
    console.error(`Error loading shareable link: ${err}`);
    setLatestDataset(); // Restore to default function if loading link does not work.
  }

  if (successfulLoad) { start(); }
}

/** 
 * Preloads images in the filtered character data and converts to base64 representation.
*/
/** Full URL for a data set image: local repo paths and data URLs pass through, anything else gets the image host prefix. */
function imageURL(img) {
  return /^(src\/|data:|https?:)/.test(img) ? img : imageRoot + img;
}

function preloadImages() {
  const totalLength = characterDataToSort.length;
  let imagesLoaded = 0;

  const tick = () => progressBar(`Loading images ${++imagesLoaded} of ${totalLength}`, Math.floor(imagesLoaded * 100 / totalLength));
  progressBar(`Loading images 0 of ${totalLength}`, 0);

  /**
   * Portraits in the repo are preloaded with an Image element and keep their URL, which also
   * works when index.html is opened straight from disk (fetch() refuses file:// URLs).
   * Remote portraits from older data sets are fetched and inlined as data URLs as before.
   * A broken image never blocks the sorter: it resolves to its URL and shows as broken.
   */
  const loadImage = (src) => new Promise(res => {
    if (!/^https?:/.test(src)) {
      const img = new Image();
      img.onload = img.onerror = () => { tick(); res(src); };
      img.src = src;
      return;
    }
    fetch(src).then(r => r.blob()).then(blob => {
      const reader = new FileReader();
      reader.onload = ev => { tick(); res(ev.target.result); };
      reader.onerror = () => { tick(); res(src); };
      reader.readAsDataURL(blob);
    }).catch(() => { tick(); res(src); });
  });

  return Promise.all(characterDataToSort.map(async (char, idx) => {
    characterDataToSort[idx].img = await loadImage(imageURL(char.img));
  }));
}

/**
 * Returns a readable time string from milliseconds.
 * 
 * @param {number} milliseconds
 */
function msToReadableTime (milliseconds) {
  let t = Math.floor(milliseconds/1000);
  const years = Math.floor(t / 31536000);
  t = t - (years * 31536000);
  const months = Math.floor(t / 2592000);
  t = t - (months * 2592000);
  const days = Math.floor(t / 86400);
  t = t - (days * 86400);
  const hours = Math.floor(t / 3600);
  t = t - (hours * 3600);
  const minutes = Math.floor(t / 60);
  t = t - (minutes * 60);
  const content = [];
	if (years) content.push(years + " year" + (years > 1 ? "s" : ""));
	if (months) content.push(months + " month" + (months > 1 ? "s" : ""));
	if (days) content.push(days + " day" + (days > 1 ? "s" : ""));
	if (hours) content.push(hours + " hour"  + (hours > 1 ? "s" : ""));
	if (minutes) content.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
	if (t) content.push(t + " second" + (t > 1 ? "s" : ""));
  return content.slice(0,3).join(', ');
}

/**
 * Reduces text to a certain rendered width.
 *
 * @param {string} text Text to reduce.
 * @param {string} font Font applied to text. Example "12px Arial".
 * @param {number} width Width of desired width in px.
 */
function reduceTextWidth(text, font, width) {
  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  if (context.measureText(text).width < width * 0.8) {
    return text;
  } else {
    let reducedText = text;
    while (context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
      reducedText = reducedText.slice(0, -1);
    }
    return reducedText + '..';
  }
}

window.onload = init;
