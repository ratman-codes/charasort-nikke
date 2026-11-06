# Maintaining the Nikke sorter

Live site: https://ratman-codes.github.io/charasort-nikke/ (GitHub Pages, branch `master`, root).
Deploy = commit and push. Nothing is built; the files are served as-is.

## Adding new characters (roster update)

1. **New data file.** Copy the newest `src/js/data/YYYY-MM-DD.js` to today's date. Do not edit line 1:
   the version key is read from the file name. Old files stay so old result links still replay
   against the roster they were made with.
2. **Load it.** Add a `<script src="src/js/data/YYYY-MM-DD.js?v=...">` line in `index.html` after the
   previous newest one. The newest date wins automatically.
3. **Add entries** at the end of `characterData`. Shape:

   ```js
   {
     name: "Scarlet: Black Shadow",
     img: "src/assets/portraits/scarlet-black-shadow.webp",
     opts: {
       rarity: ["SSR"],            // SSR | SR | R
       burst: ["burst3"],          // burst1 | burst2 | burst3 (hybrids list several)
       class: ['attacker'],        // attacker | defender | supporter
       element: ['wind'],          // fire | water | wind | electric | iron (hybrids list several)
       weapon: ['RL'],             // AR | SMG | SG | SR | RL | MG
       manufacturer: ['pilgrim'],  // elysion | missilis | tetra | pilgrim | abnormal
       SSRalt: true,               // see flags below
     }
   },
   ```

   Flags (omit when false):
   | flag | set on |
   |---|---|
   | `SSRalt: true` | an alt form of an SSR (Scarlet: Black Shadow, Marian: Queen) |
   | `SRalt: true` | an SSR alt of an SR base (Anis: Sparkling Summer, Anne: Miracle Fairy) |
   | `SRbase: true` | the SR base that now has an SSR alt (Anis, N102) |
   | `overspec: true` | an Overspec form (Rapi: Red Hood) |
   | `overspecbase: true` | the base of an Overspec (Rapi, Neon) |
   | `collab: true` | collab units; manufacturer is `abnormal` |
   | `aprilfools: true` | April Fools units (Shifty, Mekami Shifty) |

   Naming: alt forms are `Base: Alt Name`. The battle screen groups forms by the part before the colon,
   so keep the base name identical. Two families don't follow the pattern and are linked by hand in
   `FAMILY_LINKS` in `src/js/main.js`: `Anne: Miracle Fairy` → `N102`, `Marian: Queen` → `Marian (Modernia)`.
   Add any new odd case there.
4. **Portrait.** Save a 256x468 WebP to `src/assets/portraits/<slug>.webp`, slug = lowercase name,
   `: ` and spaces → `-`, punctuation dropped (`2B` → `2b`, `Scarlet: Black Shadow` → `scarlet-black-shadow`).
   Source so far: nkas.pages.dev character art. April Fools units use user-supplied art.
5. **Changelog.** Add `<p>MM/DD/YY - Updated with latest Nikkepedia units.</p>` under Changelog in `index.html`.
6. **Bump the cache tag** (next section), test, push.

Start-screen cards use Scarlet / Anis / Rapi and their alts as examples, and the toggle cards name
2B, iDoll Ocean and Shifty (`src/js/picker.js`). If any of those get renamed, update picker.js too.

## Every deploy: bump the cache tag

Every `<script>` and `<link>` in `index.html` ends in `?v=YYYYMMDD` plus a letter. Change all of them
(find-and-replace the old value) on every push, or returning visitors keep stale JS/CSS. A stale
html2canvas once produced garbled image exports for other people.

## Testing locally

Open over HTTP, not from disk: `file://` breaks image export (tainted canvas) and fetch.
`python -m http.server 8477` in the repo folder, or the `charasort-nikke` entry in
`C:\Users\imrat\.claude\launch.json` (same thing). Checklist after a roster update:

- Start screen: Nikke count and preset counts changed as expected; new unit shows under the right filters.
- Battle screen: new unit's portrait loads; alt thumbnails under the name show its other forms.
- Add `#finish` to the URL (or the footer "Auto-finish" link) to jump to results; check the new unit
  appears and Generate Image still downloads a PNG.
- An old result link still opens and shows the old roster.

## If a GitHub Pages deploy fails with "in progress deployment"

Two pushes close together can leave Pages holding a stale lock on the earlier deployment; every
later run then fails in seconds with "Deployment request failed ... due to in progress deployment.
Please cancel <sha> first". Re-running does not help, and setting the Pages branch to None
unpublishes the site without clearing it. Fix:

1. GitHub → Settings → Developer settings → Fine-grained tokens → new token, only this repo,
   Repository permission **Pages: Read and write**.
2. In PowerShell (sha from the error message):
   ```powershell
   Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/ratman-codes/charasort-nikke/pages/deployments/<sha>/cancel" -Headers @{ Authorization = "Bearer YOUR_TOKEN"; Accept = "application/vnd.github+json" }
   ```
3. Actions → failed run → Re-run all jobs. Delete the token afterwards.

## Where things live

| what | where |
|---|---|
| page, buttons, changelog, cache tags | `index.html` |
| sorting, results, export, hotkeys, alt thumbnails, finished-screen images | `src/js/main.js` |
| start-screen presets, form cards, filter chips (drives the hidden checkboxes) | `src/js/picker.js` |
| light/dark toggle | `src/js/theme.js` |
| all styling, bundled Arimo font | `src/css/styles.css` |
| rosters | `src/js/data/*.js` |
| portraits | `src/assets/portraits/*.webp` |
| finished-screen images | `src/assets/finish/`, listed in `FINISH_IMAGES` in main.js (rotates when 3+) |
| start-screen chibis, OG banner | `src/assets/defaultL.gif`, `defaultR.webp`, `banner.jpg` |

Design decisions already settled: results keep columns of five growing right with a text list,
wrapping into labelled bands; rank beside the portrait; light mode default; hotkeys A/D pick,
Space tie, Z undo, X redo, Enter save; "Alt only" on the SSR card stays disabled; hit counter,
favicon, Album link and Auto-finish stay.
