/**
 * Visual picker for the start screen.
 *
 * The plain option checkboxes that populateOptions() builds stay the source of truth: start(),
 * save data and shared links all read them unchanged. This file draws portrait cards and toggles
 * on top of them, hides the checkboxes it covers, and keeps the two in sync. Anything it cannot
 * express (an option key missing from an older data set, or a checkbox combination no card
 * offers) is left visible under "More filters" so nothing is ever lost.
 */

/** Three "which form do you rank" cards. Each mode sets the listed checkboxes. */
const PICKER_CARDS = [
  {
    title: 'SSR with an SSR alt', base: 'Scarlet', alt: 'Scarlet: Black Shadow', altLabel: 'Alt only',
    keys: ['SSRalt'],
    modes: {
      base: { set: { SSRalt: true },  note: 'Default. Alts like Scarlet: Black Shadow stay out.' },
      alt:  { set: null,              note: 'Not available: the data has no tag for base SSRs with alts.' },
      both: { set: { SSRalt: false }, note: 'Base and alt are both ranked, as separate entries.' },
    },
  },
  {
    title: 'SR with an SSR alt', base: 'Anis', alt: 'Anis: Sparkling Summer', altLabel: 'Alt only',
    keys: ['SRalt', 'SRbase'],
    modes: {
      base: { set: { SRalt: true,  SRbase: false }, note: 'Default. Alts like Anis: Sparkling Summer stay out.' },
      alt:  { set: { SRalt: false, SRbase: true },  note: 'The SR base is dropped when an SSR alt exists.' },
      both: { set: { SRalt: false, SRbase: false }, note: 'Base and alt are both ranked, as separate entries.' },
    },
  },
  {
    title: 'Overspec', base: 'Rapi', alt: 'Rapi: Red Hood', altLabel: 'Overspec only',
    keys: ['overspec', 'overspecbase'],
    modes: {
      base: { set: { overspec: true,  overspecbase: false }, note: 'Overspec forms like Rapi: Red Hood stay out.' },
      alt:  { set: { overspec: false, overspecbase: true },  note: 'Default. The base form is dropped once an Overspec exists.' },
      both: { set: { overspec: false, overspecbase: false }, note: 'Base and Overspec are both ranked, as separate entries.' },
    },
  },
];

/** Three include/exclude toggles. The checkbox is an "exclude" flag, so included = unchecked. */
const PICKER_TOGGLES = [
  { key: 'collab',     title: 'Collab Nikkes',     sub: '2B, Makima, Emilia, Asuka, Aigis...',          example: '2B' },
  { key: 'rikker',     title: 'Rare (R) Nikkes',   sub: 'iDoll, Product and Soldier units',            example: 'iDoll Ocean' },
  { key: 'aprilfools', title: 'April Fools units', sub: 'Shifty, Syuen, Mecha Shifty, Mekami Shifty',  example: 'Shifty' },
];

const pickerBox = (key) => document.getElementById(`cb-${key}`);

/** Portrait URL for a character name in the current data set, or '' if absent. */
function pickerImage(name) {
  const char = characterData.find(c => c.name === name);
  if (!char) return '';
  return imageURL(char.img);
}

function pickerTile(src, label) {
  return src ? `<span class="pics"><img src="${src}" alt="" loading="lazy"></span>` : `<span class="pics empty">${label}</span>`;
}

function pickerSplitTile(srcA, srcB) {
  if (!srcA || !srcB) return `<span class="pics empty">Both</span>`;
  return `<span class="pics two"><img src="${srcA}" alt=""><img src="${srcB}" alt=""></span>`;
}

/** Which mode a card's checkboxes currently express, or null if none matches. */
function pickerCardMode(card) {
  return Object.keys(card.modes).find(mode => {
    const set = card.modes[mode].set;
    return set && Object.keys(set).every(k => pickerBox(k).checked === set[k]);
  }) || null;
}

/** Build the picker from scratch for the current data set. Called by populateOptions(). */
function buildPicker() {
  const picker = document.querySelector('.picker');
  if (!picker) return;

  const covered = new Set();
  let html = '';

  /** Presets: each one is a full state for the plain options; sub-option groups are switched off. */
  const plain = options.filter(opt => !('sub' in opt));
  if (plain.length) {
    html += '<div class="presets">' + PICKER_PRESETS.map(pr => `
      <button type="button" class="preset" data-preset="${pr.key}" aria-pressed="false">
        <span class="t">${pr.title}</span><span class="d">${pr.desc}</span><span class="n" data-n="${pr.key}"></span>
      </button>`).join('') + '</div>';
  }

  const cards = PICKER_CARDS.filter(card => card.keys.every(k => pickerBox(k)));
  if (cards.length) {
    html += '<h2>Which forms do you want to include in the ranking?</h2><div class="pairs">';
    cards.forEach((card, ci) => {
      card.keys.forEach(k => covered.add(k));
      const base = pickerImage(card.base), alt = pickerImage(card.alt);
      const seg = (mode, label, tile) => {
        const m = card.modes[mode];
        return `<button type="button" data-card="${ci}" data-mode="${mode}" aria-pressed="false" ${m.set ? '' : `disabled title="${m.note}"`}>${tile}<span class="lbl">${label}</span></button>`;
      };
      html += `<div class="pair"><h3>${card.title}</h3><div class="ex">e.g. ${card.base} / ${card.alt}</div>
        <div class="seg" role="group" aria-label="${card.title}">
          ${seg('base', 'Base only', pickerTile(base, 'Base'))}
          ${seg('alt', card.altLabel, pickerTile(alt, 'Alt'))}
          ${seg('both', 'Both', pickerSplitTile(base, alt))}
        </div><div class="foot" data-foot="${ci}"></div></div>`;
    });
    html += '</div>';
  }

  const toggles = PICKER_TOGGLES.filter(t => pickerBox(t.key));
  if (toggles.length) {
    html += '<h2>Who else is in?</h2><div class="roster">';
    toggles.forEach(t => {
      covered.add(t.key);
      const img = pickerImage(t.example);
      html += `<button type="button" class="tog" data-toggle="${t.key}" aria-pressed="false">
        ${img ? `<img src="${img}" alt="" loading="lazy">` : '<span class="noimg"></span>'}
        <span><span class="t">${t.title}</span><br><span class="s">${t.sub}</span><br><span class="pill"></span></span>
      </button>`;
    });
    html += '</div>';
  }

  picker.innerHTML = html;
  picker.hidden = !html;

  /** Hide the plain checkboxes the picker now covers. */
  document.querySelectorAll('.options > div').forEach(div => {
    const input = div.querySelector('input');
    const key = input && input.id.startsWith('cb-') ? input.id.slice(3) : '';
    div.hidden = covered.has(key);
  });

  picker.onclick = (ev) => {
    const btn = ev.target.closest('button');
    if (!btn || btn.disabled) return;
    if (btn.dataset.preset) {
      applyPreset(btn.dataset.preset);
    } else if (btn.dataset.card !== undefined) {
      const set = cards[Number(btn.dataset.card)].modes[btn.dataset.mode].set;
      Object.keys(set).forEach(k => pickerBox(k).checked = set[k]);
    } else if (btn.dataset.toggle) {
      const box = pickerBox(btn.dataset.toggle);
      box.checked = !box.checked;
    }
    syncPicker();
  };

  const optList = document.querySelector('.options');
  if (!optList.dataset.pickerBound) {
    optList.dataset.pickerBound = '1';
    optList.addEventListener('change', () => syncPicker());
    optList.addEventListener('click', () => setTimeout(syncPicker, 0));
  }

  syncPicker();
}

/** Reflect the checkbox state in the picker, the "More filters" summary and the live count. */
function syncPicker() {
  const picker = document.querySelector('.picker');
  if (!picker) return;

  const cards = PICKER_CARDS.filter(card => card.keys.every(k => pickerBox(k)));
  cards.forEach((card, ci) => {
    const mode = pickerCardMode(card);
    picker.querySelectorAll(`button[data-card="${ci}"]`).forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.mode === mode)));
    const foot = picker.querySelector(`[data-foot="${ci}"]`);
    if (foot) foot.textContent = mode ? card.modes[mode].note : 'Custom: both forms are excluded. Change it under More filters.';
  });

  /** Presets: pressed when the checkboxes match, and each shows its own count. */
  picker.querySelectorAll('button[data-preset]').forEach(btn => {
    const pr = PICKER_PRESETS.find(p => p.key === btn.dataset.preset);
    btn.setAttribute('aria-pressed', String(presetMatches(pr)));
    const n = withPreset(pr, () => selectCharacters().length);
    btn.querySelector(`[data-n="${pr.key}"]`).textContent = `${n} Nikkes \u00b7 about ${Math.max(1, Math.round(estimateBattles(n) * 1.6 / 60))} min`;
  });

  picker.querySelectorAll('button[data-toggle]').forEach(btn => {
    const included = !pickerBox(btn.dataset.toggle).checked;
    btn.setAttribute('aria-pressed', String(included));
    btn.querySelector('.pill').textContent = included ? 'Included' : 'Excluded';
  });

  /** Summary of the folded-away filters. */
  const status = document.querySelector('.morefilters-status');
  if (status) {
    const groups = options.filter(opt => 'sub' in opt);
    const active = groups.filter(opt => document.getElementById(`cbgroup-${opt.key}`).checked).map(opt => opt.name.replace(/^Filter by /, ''));
    const loose = options.filter(opt => !('sub' in opt) && !document.getElementById(`cb-${opt.key}`).parentElement.parentElement.hidden);
    const names = groups.map(opt => opt.name.replace(/^Filter by /, ''));
    status.textContent = active.length ? `Active: ${active.join(', ')}` : `${names.join(', ')}${loose.length ? ' and more' : ''}. None active.`;
  }

  /** Live count. selectCharacters() reads the same checkboxes start() will. */
  const n = selectCharacters().length;
  const picks = estimateBattles(n);
  const mins = Math.max(1, Math.round(picks * 1.6 / 60));
  document.querySelector('.selection-n').innerHTML = `<b>${n}</b> Nikke${n === 1 ? '' : 's'} selected`;
  document.querySelector('.selection-est').textContent = n < 2 ? 'Pick at least two to start.' : `up to ${picks} picks, roughly ${mins} min`;
}

/** Presets. `state(opt)` gives the wanted checked value for a plain option. */
const PICKER_PRESETS = [
  { key: 'quick', title: 'Quick ranking', desc: 'Base forms only. The default.', state: opt => !!opt.checked },
  { key: 'all',   title: 'Everything',    desc: 'Every form, every unit.',       state: () => false },
];

function presetState(pr) {
  const wanted = {};
  options.forEach(opt => { if (!('sub' in opt)) wanted[opt.key] = pr.state(opt); });
  return wanted;
}

function presetMatches(pr) {
  const wanted = presetState(pr);
  const plainOk = Object.keys(wanted).every(key => pickerBox(key).checked === wanted[key]);
  const groupsOff = options.filter(opt => 'sub' in opt).every(opt => !document.getElementById(`cbgroup-${opt.key}`).checked);
  return plainOk && groupsOff;
}

function applyPreset(pr) {
  if (typeof pr === 'string') pr = PICKER_PRESETS.find(p => p.key === pr);
  const wanted = presetState(pr);
  Object.keys(wanted).forEach(key => pickerBox(key).checked = wanted[key]);
  options.filter(opt => 'sub' in opt).forEach(opt => {
    document.getElementById(`cbgroup-${opt.key}`).checked = false;
    opt.sub.forEach((s, i) => { const box = document.getElementById(`cb-${opt.key}-${i}`); box.checked = true; box.disabled = true; });
  });
}

/** Run fn with a preset applied, then put every checkbox back exactly as it was. */
function withPreset(pr, fn) {
  const boxes = [...document.querySelectorAll('.options input[type=checkbox]')];
  const saved = boxes.map(b => [b.checked, b.disabled]);
  applyPreset(pr);
  const out = fn();
  boxes.forEach((b, i) => { b.checked = saved[i][0]; b.disabled = saved[i][1]; });
  return out;
}

/** Same total the sorter's progress bar uses: the sum of every merge-sort split. */
function estimateBattles(n) {
  return n > 1 ? n + estimateBattles(Math.ceil(n / 2)) + estimateBattles(Math.floor(n / 2)) : 0;
}
