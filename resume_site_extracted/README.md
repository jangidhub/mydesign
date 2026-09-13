# Sudhanshu Jangid — Portfolio

A static site (no build step, no framework) rebuilt on top of the original
single-file page. Plain HTML/CSS/JS, with Three.js (hero 3D object) and no
other runtime dependencies, loaded from CDN.

## Run it locally

No build tools needed. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly with `file://` also mostly works, but the
Three.js module import and fetch-based bits behave more reliably over http.)

## Structure

```
index.html          Page markup (semantic, content mostly rendered from data.js)
css/styles.css       All styling — design tokens at the top of the file
js/data.js           All editable content: projects, skills, links, etc.
js/main.js           Rendering, nav, scroll reveal, custom cursor, NFC card tilt
js/hero-scene.js     Three.js hero scene (with WebGL/mobile/reduced-motion fallback)
assets/favicon.svg   Placeholder monogram favicon
robots.txt, sitemap.xml
```

To change any text content (projects, skills, links, resume path), edit
**`js/data.js`** — you shouldn't need to touch the HTML or CSS for routine
updates.

## What I changed vs. the original page

- Kept your name, role, location, and real contact links (email, GitHub,
  LinkedIn) from the original file.
- Kept your four original projects (My Application Sound, AI Smart Glasses*,
  Win_Assist, JARVIS AI) but reworded the copy — the original used phrases
  like "revolutionary," "next-generation," and "legendary" which read as
  hype rather than description. I rewrote them factually and labeled them
  "Experimental" / "In Development" since none currently have public
  links or confirmed shipped status.
  \* AI Smart Glasses wasn't in your brief's project list, so I didn't
  carry it into Selected Work in the new structure — see TODO below.
- Added "Inspection Management System" and the "Tap-to-Connect NFC
  Platform" (Currently Building) using the description/features you
  provided in the brief.
- Replaced the AI-assistant/gesture-control personal-brand framing with the
  software-developer positioning from your brief (hero, About, What I Build,
  Skills, Education, Experience, Contact).
- Rebuilt the visual design: near-black palette, Inter typeface, a single
  restrained accent blue, a large-type editorial layout for Selected Work
  instead of generic cards, a Three.js hero object, and a CSS-tilt NFC card
  for Currently Building.
- Added resume download buttons (nav, hero, dedicated strip) pointing at
  `/resume.pdf` — see TODO, the PDF itself doesn't exist yet.
- Added meta description, Open Graph tags, canonical URL, favicon,
  robots.txt, sitemap.xml.
- Rebuilt navigation with a proper mobile fullscreen menu (the original had
  `display: none` on mobile with no way to reach the nav links at all).
- Added accessibility basics: skip link, visible focus states, semantic
  landmarks, `prefers-reduced-motion` support throughout (including
  disabling the 3D scene, custom cursor and card tilt), and a no-JS
  fallback so content isn't hidden if JavaScript fails to load.

## TODO — replace before you publish

- **Resume PDF**: `/resume.pdf` doesn't exist. Add the real file at the
  project root (same folder as `index.html`) with that exact name, or
  update `resumeUrl` in `js/data.js` and the two `href="/resume.pdf"`
  attributes in `index.html`.
- **Project links**: none of the four original projects had GitHub/demo
  links in the source page, so none are shown. Add them in `js/data.js`
  (`github` / `demo` fields) once public — this is also true for
  Inspection Management System.
- **Project tech stacks**: for My Application Sound, Win_Assist and JARVIS
  AI I only had "Python" to go on for tooling (e.g. MediaPipe, specific
  libraries). Fill in `tech` arrays in `js/data.js` with what you actually
  used.
- **Project screenshots**: visuals are abstract generated patterns, not
  real screenshots (none existed to use, and I didn't want to fabricate
  fake UI). Swap in real screenshots via the `work-visual` markup / by
  extending `data.js` with an `image` field if you'd like.
- **AI Smart Glasses**: this was on your original site but not mentioned
  in the new brief's project list — I left it out of Selected Work. Add it
  back into `PROJECTS` in `js/data.js` if you want it included, with an
  honest status label.
- **Twitter/X link**: it was on the original site but not requested in the
  brief's contact section, so I didn't carry it into the new nav/footer/
  contact. It's easy to add back in `js/data.js` and the relevant markup
  if you want it.
- **Domain**: `og:url`, `canonical`, and `sitemap.xml` currently point at
  a placeholder `https://sudhanshujangid.example.com/` — replace with your
  real domain once deployed.
- **Education dates**: left blank in `js/data.js` (`EDUCATION[0].period`)
  since no dates were given — add if you want them shown.
- **OG image**: `og:image` points at `/assets/og-image.png`, which doesn't
  exist yet. Add a 1200×630 image there, or remove the tag.

## Known limitations / things I couldn't verify

- I don't have your actual project source code/repos, so all technical
  descriptions beyond what was explicitly given to me are based only on
  the wording already on your old site — verify accuracy before
  publishing.
- I tested this in a sandboxed environment without a real browser, so I
  couldn't visually confirm the Three.js rendering or run Lighthouse.
  I checked HTML tag balance and JS syntax, and used defensive coding
  (try/catch around WebGL setup, capability checks, reduced-motion checks)
  so it should degrade gracefully — but please open it locally and check
  the browser console before deploying.
