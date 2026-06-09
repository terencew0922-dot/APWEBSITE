/* ===== Q&A Forum — functional, persisted in localStorage ===== */

const STORE_KEY = 'knox_forum_v2';
const VOTE_KEY = 'knox_votes_v1';

const seedQuestions = [
  {
    id: 'q1', title: 'How do I balance chemical equations quickly?',
    text: "I always lose marks on balancing redox reactions in chemistry. Are there any reliable step-by-step tricks for exams?",
    subject: 'Science', year: 11, author: 'Maya R.', initials: 'MR', votes: 24, time: Date.now() - 1000 * 60 * 60 * 5,
    answers: [
      { text: "Use the half-reaction method: split into oxidation and reduction, balance atoms then charge with electrons, then combine. Practising 5 a day made it automatic for me.", author: 'Mr. Okafor (Teacher)', teacher: true, accepted: true, time: Date.now() - 1000 * 60 * 60 * 4 },
      { text: "Khan Academy's redox playlist is gold. Linked it in the Resources page!", author: 'Liam P.', time: Date.now() - 1000 * 60 * 60 * 3 }
    ]
  },
  {
    id: 'q2', title: 'Best way to structure a Paper 1 history essay?',
    text: "What structure do examiners actually want for the source-analysis essay? My intros take forever.",
    subject: 'Humanities', year: 11, author: 'Daniel K.', initials: 'DK', votes: 18, time: Date.now() - 1000 * 60 * 60 * 26,
    answers: [
      { text: "PEEL works but for source questions use SOURCE: State point, Origin, Use evidence, Reliability, Connect to question, Evaluate. Keep intros to 2 sentences.", author: 'Ms. Bennett (Teacher)', teacher: true, accepted: true, time: Date.now() - 1000 * 60 * 60 * 25 }
    ]
  },
  {
    id: 'q3', title: 'Stuck on quadratic word problems — any tips?',
    text: "I can solve quadratics fine but translating word problems into equations confuses me. How do you set them up?",
    subject: 'Mathematics', year: 10, author: 'Sofia L.', initials: 'SL', votes: 31, time: Date.now() - 1000 * 60 * 60 * 50,
    answers: [
      { text: "Define your variable in words first ('let x = number of hours'). Underline the unknowns and the relationship words ('more than', 'product of'). Then translate line by line.", author: 'Aarav S.', time: Date.now() - 1000 * 60 * 60 * 48 },
      { text: "Drawing a quick diagram or table before writing the equation helps me massively.", author: 'Grace W.', time: Date.now() - 1000 * 60 * 60 * 47 }
    ]
  },
  {
    id: 'q4', title: 'Recommended reading to prep for Senior English?',
    text: "Heading into Senior English next term — what should I read over the break to get ahead?",
    subject: 'English', year: 12, author: 'Noah T.', initials: 'NT', votes: 12, time: Date.now() - 1000 * 60 * 60 * 72, answers: []
  }
];

function loadQuestions() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  localStorage.setItem(STORE_KEY, JSON.stringify(seedQuestions));
  return JSON.parse(JSON.stringify(seedQuestions));
}
function saveQuestions(qs) { localStorage.setItem(STORE_KEY, JSON.stringify(qs)); }
function getVotes() { try { return JSON.parse(localStorage.getItem(VOTE_KEY)) || {}; } catch (e) { return {}; } }
function setVotes(v) { localStorage.setItem(VOTE_KEY, JSON.stringify(v)); }

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60); if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24); return d === 1 ? 'yesterday' : `${d}d ago`;
}
function initialsOf(name) {
  return name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
}
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

let questions = [];
let currentFilter = 'All';
let currentYear = 'All';
let currentSort = 'votes';
let searchTerm = '';

function renderForum() {
  const list = document.getElementById('q-list');
  if (!list) return;
  const votes = getVotes();

  let view = questions.filter(q => {
    const matchSubject = currentFilter === 'All' || q.subject === currentFilter;
    const matchYear = currentYear === 'All' || String(q.year) === currentYear;
    const t = searchTerm.toLowerCase();
    const matchSearch = !t || q.title.toLowerCase().includes(t) || q.text.toLowerCase().includes(t);
    return matchSubject && matchYear && matchSearch;
  });

  if (currentSort === 'votes') view.sort((a, b) => b.votes - a.votes);
  else if (currentSort === 'new') view.sort((a, b) => b.time - a.time);
  else if (currentSort === 'unanswered') view = view.filter(q => q.answers.length === 0).sort((a, b) => b.time - a.time);

  // stats
  const totalA = questions.reduce((n, q) => n + q.answers.length, 0);
  setText('stat-q', questions.length);
  setText('stat-a', totalA);
  setText('stat-solved', questions.filter(q => q.answers.some(a => a.accepted)).length);

  if (view.length === 0) {
    list.innerHTML = `<div class="card empty-state"><h3>No questions yet</h3><p>Nothing matches this selection.</p></div>`;
    return;
  }

  list.innerHTML = view.map(q => {
    const voted = votes[q.id];
    const ansHTML = q.answers.map(a => `
      <div class="answer ${a.accepted ? 'accepted' : ''}">
        <div class="avatar">${esc(initialsOf(a.author))}</div>
        <div class="a-body">
          <div class="a-text">${a.accepted ? '<span class="a-accepted">Accepted answer</span> ' : ''}${esc(a.text)}</div>
          <div class="a-meta">${esc(a.author)}${a.teacher ? ' · <span style="color:var(--blue-300)">Verified teacher</span>' : ''} · ${timeAgo(a.time)}</div>
        </div>
      </div>`).join('');

    return `
    <article class="card q-card" data-id="${q.id}">
      <div class="q-votes">
        <button class="vote-btn ${voted ? 'voted' : ''}" data-vote="${q.id}" aria-label="Upvote">▲</button>
        <span class="count">${q.votes}</span>
        <span class="lbl">votes</span>
      </div>
      <div class="q-main">
        <span class="pill academic">${esc(q.subject)}</span>${q.year ? ` <span class="pill sport">Year ${esc(String(q.year))}</span>` : ''}
        <h3 data-toggle="${q.id}" style="margin-top:8px">${esc(q.title)}</h3>
        <p class="q-text">${esc(q.text)}</p>
        <div class="q-foot">
          <span class="q-author"><span class="avatar">${esc(q.initials || initialsOf(q.author))}</span> ${esc(q.author)}</span>
          <span>· ${timeAgo(q.time)}</span>
          <span class="answers-toggle" data-toggle="${q.id}">${q.answers.length} answer${q.answers.length === 1 ? '' : 's'}</span>
        </div>
        <div class="answers" id="ans-${q.id}">
          ${ansHTML || '<p style="color:var(--text-dim);font-size:.88rem">No answers yet — share what you know!</p>'}
          <form class="answer-form" data-answer="${q.id}">
            <input type="text" placeholder="Write a helpful answer..." required />
            <button class="btn btn-primary btn-sm" type="submit">Post</button>
          </form>
        </div>
      </div>
    </article>`;
  }).join('');

  bindForumEvents();
}

function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

function bindForumEvents() {
  document.querySelectorAll('[data-vote]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.vote;
      const votes = getVotes();
      const q = questions.find(x => x.id === id);
      if (votes[id]) { q.votes--; delete votes[id]; }
      else { q.votes++; votes[id] = true; showToast('Thanks for the upvote.'); }
      setVotes(votes); saveQuestions(questions); renderForum();
    };
  });
  document.querySelectorAll('[data-toggle]').forEach(el => {
    el.onclick = () => {
      const box = document.getElementById('ans-' + el.dataset.toggle);
      if (box) box.classList.toggle('open');
    };
  });
  document.querySelectorAll('[data-answer]').forEach(form => {
    form.onsubmit = e => {
      e.preventDefault();
      const id = form.dataset.answer;
      const input = form.querySelector('input');
      const text = input.value.trim();
      if (!text) return;
      const name = (document.getElementById('display-name')?.value || '').trim() || 'You';
      const q = questions.find(x => x.id === id);
      q.answers.push({ text, author: name, time: Date.now() });
      saveQuestions(questions); renderForum();
      // keep the answers panel open after posting
      const box = document.getElementById('ans-' + id); if (box) box.classList.add('open');
      showToast('Answer posted.');
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('q-list')) return;
  questions = loadQuestions();
  renderForum();

  // Ask form
  const askForm = document.getElementById('ask-form');
  if (askForm) {
    askForm.onsubmit = e => {
      e.preventDefault();
      const title = document.getElementById('q-title').value.trim();
      const text = document.getElementById('q-detail').value.trim();
      const subject = document.getElementById('q-subject').value;
      const year = parseInt(document.getElementById('q-year')?.value, 10) || 7;
      const name = (document.getElementById('display-name')?.value || '').trim() || 'Anonymous Student';
      if (!title) return;
      questions.unshift({
        id: 'q' + Date.now(), title, text: text || '(No additional detail provided.)',
        subject, year, author: name, initials: initialsOf(name), votes: 1, time: Date.now(), answers: []
      });
      saveQuestions(questions);
      askForm.reset();
      currentSort = 'new';
      document.querySelectorAll('[data-sort]').forEach(c => c.classList.toggle('active', c.dataset.sort === 'new'));
      renderForum();
      showToast('Your question has been posted.');
      document.getElementById('q-list').scrollIntoView({ behavior: 'smooth' });
    };
  }

  // Subject filters
  document.querySelectorAll('[data-filter]').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderForum();
    };
  });
  // Year filters
  document.querySelectorAll('[data-year]').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('[data-year]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentYear = chip.dataset.year;
      renderForum();
    };
  });
  // Sort
  document.querySelectorAll('[data-sort]').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('[data-sort]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSort = chip.dataset.sort;
      renderForum();
    };
  });
  // Search
  const search = document.getElementById('forum-search');
  if (search) search.oninput = () => { searchTerm = search.value; renderForum(); };
});
