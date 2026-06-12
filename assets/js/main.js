/* ===== Knox Grammar School — shared UI logic ===== */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Highlight active nav link by filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Feature card pointer glow
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Animated number counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const cObs = new IntersectionObserver((ents, o) => {
      ents.forEach(en => {
        if (!en.isIntersecting) return;
        o.unobserve(el);
        let cur = 0; const step = target / 60;
        const tick = () => {
          cur += step;
          if (cur >= target) { el.textContent = target.toLocaleString() + suffix; }
          else { el.textContent = Math.floor(cur).toLocaleString() + suffix; requestAnimationFrame(tick); }
        };
        tick();
      });
    }, { threshold: 0.5 });
    cObs.observe(el);
  });
});

// Toast helper
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

// Shared header/footer injectors so markup stays consistent across pages
function navHTML(active) {
  const link = (href, label) => `<a href="${href}"${active === href ? ' class="active"' : ''}>${label}</a>`;
  return `
  <nav class="nav">
    <div class="container nav-inner">
      <a href="index.html" class="brand">
        <span class="logo"><img src="assets/img/knox-logo.svg" alt="Knox Grammar crest" /></span>
        <div><b>Knox Grammar School</b><span>Academic Portfolio Website</span></div>
      </a>
      <div class="nav-links">
        ${link('index.html','Home')}
        ${link('announcements.html','Announcements')}
        ${link('subjects.html','Resources')}
        ${link('forum.html','Q&amp;A Forum')}
        ${link('events.html','Events')}
        ${link('suggestions.html','Suggestions')}
        <a href="forum.html" class="nav-cta">Ask a Question</a>
      </div>
      <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="logo"><img src="assets/img/knox-logo.svg" alt="Knox Grammar crest" /></span>
            <div><b>Knox Grammar School</b><span>Academic Portfolio Website</span></div>
          </a>
          <p>A community of curious young men learning boldly, asking freely, and growing together since 1924. Wahroonga, Sydney.</p>
          <p class="motto">Virile Agitur — “Play the man.”</p>
        </div>
        <div>
          <h5>Learn</h5>
          <ul>
            <li><a href="subjects.html">Resource Library</a></li>
            <li><a href="forum.html">Q&amp;A Forum</a></li>
            <li><a href="events.html">Study Events</a></li>
            <li><a href="subjects.html?year=12">Past Papers</a></li>
          </ul>
        </div>
        <div>
          <h5>Campus</h5>
          <ul>
            <li><a href="announcements.html">Announcements</a></li>
            <li><a href="events.html">Calendar</a></li>
            <li><a href="mailto:enquiries@knox.nsw.edu.au">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li><a href="forum.html">Ask a Teacher</a></li>
            <li><a href="mailto:enquiries@knox.nsw.edu.au">Wellbeing</a></li>
            <li><a href="suggestions.html">Suggest a feature</a></li>
            <li><a href="subjects.html">Study Tips</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Knox Grammar School · 7 Woodville Avenue, Wahroonga NSW 2076</span>
        <span class="foot-contact">enquiries@knox.nsw.edu.au · +61 2 9487 0122</span>
      </div>
    </div>
  </footer>`;
}

// Inject shared chrome where placeholders exist
document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('nav-mount');
  const footMount = document.getElementById('footer-mount');
  if (navMount) {
    navMount.outerHTML = navHTML(navMount.dataset.active || '');
    // re-bind burger after injection
    const burger = document.querySelector('.hamburger');
    const links = document.querySelector('.nav-links');
    if (burger && links) {
      burger.addEventListener('click', () => links.classList.toggle('open'));
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
    }
  }
  if (footMount) footMount.outerHTML = footerHTML();
});
