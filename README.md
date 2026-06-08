# Knox Grammar School — Learning Hub

A modern, visually engaging website concept for **Knox Grammar School** (Wahroonga, Sydney —
est. 1924, motto *Virile Agitur*). Pure HTML/CSS/JS, no build step — open `index.html` in a browser.

## Design
A **heritage collegiate** aesthetic: deep navy/black with Knox royal blue and heraldic **gold**,
distinctive serif typography (**Fraunces** display + **Spectral** body), a saltire-weave background
texture, and a hand-built SVG recreation of the school crest (blue saltire of St Andrew, Scottish
thistle, and the *Virile Agitur* motto banner).

## Pages
| Page | Purpose |
|------|---------|
| `index.html` | Home — crest hero, feature overview, stats, latest announcements |
| `forum.html` | **Q&A Forum** — ask questions, post answers, upvote (saved in your browser via localStorage) |
| `resources.html` | **Resource Library** — filterable notes, past papers, videos by subject |
| `announcements.html` | **Announcements** — filterable school news feed |
| `events.html` | **Events** — timeline + interactive calendar + co-curricular + RSVP |
| `about.html` | About / ethos / values / leadership / contact |

## Structure
```
assets/
  css/styles.css     # heritage design system + all components
  js/main.js         # shared nav/footer, reveal & counter animations, toasts
  js/forum.js        # functional Q&A forum (localStorage persistence)
  img/knox-crest.svg # full crest (saltire + thistle + motto banner)
  img/knox-mark.svg  # compact emblem used in the nav/footer/favicon
```

## Run locally
Open `index.html` directly, or serve the folder:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes
- The crest is an original **SVG recreation** of the Knox emblem (the pasted image wasn't a usable
  file), so it's crisp at any size. Swap in the official artwork any time by replacing the two SVGs.
- This is a **concept/demo** site. Address (7 Woodville Avenue, Wahroonga) and founding year (1924)
  are public facts; staff profiles and stats are illustrative placeholders — replace with official content.
