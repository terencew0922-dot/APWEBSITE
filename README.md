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
| `subjects.html` | **Subject picker** — a year's subjects shown as graphic cards (`?year=N`) |
| `subject.html` | **Subject page** — materials/resources for one subject (`?year=N&subject=X`) |
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
- The crest is the **official Knox Grammar School logo** (`assets/img/knox-logo.svg`), a vector file
  so it stays crisp at any size. It is shown on a light plaque on the home page and in a small white
  chip in the nav/footer so its navy/black elements remain legible on the dark theme.
- The home page is a minimal **title page** (crest + name + motto). All other pages carry the content.
- This is a **concept/demo** site. Address (7 Woodville Avenue, Wahroonga) and founding year (1924)
  are public facts; staff profiles and any figures are illustrative placeholders — replace with official content.
