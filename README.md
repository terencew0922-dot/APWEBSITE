# Northgate Academy — Learning Hub

A modern, visually engaging website for a high school, built to aid student learning.
Pure HTML/CSS/JS — no build step. Just open `index.html` in a browser.

## Theme
Black & blue, glassmorphism, animated ambient background, scroll-reveal animations.

## Pages
| Page | Purpose |
|------|---------|
| `index.html` | Home — hero, feature overview, stats, latest announcements |
| `forum.html` | **Q&A Forum** — ask questions, post answers, upvote (saved in your browser via localStorage) |
| `resources.html` | **Resource Library** — filterable notes, past papers, videos by subject |
| `announcements.html` | **Announcements** — filterable school news feed |
| `events.html` | **Events** — timeline + interactive calendar + clubs + RSVP |
| `about.html` | About / values / leadership / contact form |

## Structure
```
assets/
  css/styles.css   # design system + all components
  js/main.js       # shared nav/footer, reveal & counter animations, toasts
  js/forum.js      # functional Q&A forum (localStorage persistence)
```

## Run locally
Open `index.html` directly, or serve the folder:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

The Q&A forum is fully interactive: questions, answers and upvotes persist in your
browser's localStorage, so you can try it without any backend.
