/* ===== Q&A Forum board — one Year + Subject board, persisted in localStorage ===== */
const VOTE_KEY = 'knox_votes_v1';

function getVotes() { try { return JSON.parse(localStorage.getItem(VOTE_KEY)) || {}; } catch (e) { return {}; } }
function setVotes(v) { localStorage.setItem(VOTE_KEY, JSON.stringify(v)); }

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60); if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24); return d === 1 ? 'yesterday' : `${d}d ago`;
}
function initialsOf(name) { return name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase(); }
function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

// Board context from the URL
const _p = new URLSearchParams(location.search);
const BOARD_YEAR = parseInt(_p.get('year'), 10);
const [BOARD_SUBJ, BOARD_LEVEL] = (_p.get('subject') || '').split('|');
const BOARD_LABEL = BOARD_LEVEL ? (BOARD_LEVEL.indexOf(BOARD_SUBJ) === 0 ? BOARD_LEVEL : BOARD_SUBJ + ' ' + BOARD_LEVEL) : BOARD_SUBJ;

let questions = [];
let currentSort = 'votes';
let searchTerm = '';

function inBoard(q) {
  return q.year === BOARD_YEAR && q.subject === BOARD_SUBJ && (!BOARD_LEVEL || q.level === BOARD_LEVEL);
}

function renderForum() {
  const list = document.getElementById('q-list');
  if (!list) return;
  const votes = getVotes();
  const board = questions.filter(inBoard);

  let view = board.filter(q => {
    const t = searchTerm.toLowerCase();
    return !t || q.title.toLowerCase().includes(t) || q.text.toLowerCase().includes(t);
  });
  if (currentSort === 'votes') view.sort((a, b) => b.votes - a.votes);
  else if (currentSort === 'new') view.sort((a, b) => b.time - a.time);
  else if (currentSort === 'unanswered') view = view.filter(q => q.answers.length === 0).sort((a, b) => b.time - a.time);

  setText('stat-q', board.length);
  setText('stat-a', board.reduce((n, q) => n + q.answers.length, 0));
  setText('stat-solved', board.filter(q => q.answers.some(a => a.accepted)).length);

  if (view.length === 0) {
    list.innerHTML = `<div class="card empty-state"><h3>No questions yet</h3><p>Be the first to ask a question for ${esc(BOARD_LABEL)}.</p></div>`;
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
        <h3 data-toggle="${q.id}">${esc(q.title)}</h3>
        <p class="q-text">${esc(q.text)}</p>
        <div class="q-foot">
          <span class="q-author"><span class="avatar">${esc(initialsOf(q.author))}</span> ${esc(q.author)}</span>
          <span>· ${timeAgo(q.time)}</span>
          <span class="answers-toggle" data-toggle="${q.id}">${q.answers.length} answer${q.answers.length === 1 ? '' : 's'}</span>
        </div>
        <div class="answers" id="ans-${q.id}">
          ${ansHTML || '<p style="color:var(--text-dim);font-size:.88rem">No answers yet — share what you know.</p>'}
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

function bindForumEvents() {
  document.querySelectorAll('[data-vote]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.vote;
      const votes = getVotes();
      const q = questions.find(x => x.id === id);
      if (votes[id]) { q.votes--; delete votes[id]; }
      else { q.votes++; votes[id] = true; showToast('Thanks for the upvote.'); }
      setVotes(votes); saveForumQuestions(questions); renderForum();
    };
  });
  document.querySelectorAll('[data-toggle]').forEach(el => {
    el.onclick = () => { const box = document.getElementById('ans-' + el.dataset.toggle); if (box) box.classList.toggle('open'); };
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
      saveForumQuestions(questions); renderForum();
      const box = document.getElementById('ans-' + id); if (box) box.classList.add('open');
      showToast('Answer posted.');
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('q-list')) return;
  questions = loadForumQuestions();
  renderForum();

  const askForm = document.getElementById('ask-form');
  if (askForm) {
    askForm.onsubmit = e => {
      e.preventDefault();
      const title = document.getElementById('q-title').value.trim();
      const text = document.getElementById('q-detail').value.trim();
      const name = (document.getElementById('display-name')?.value || '').trim() || 'Anonymous Student';
      if (!title) return;
      const q = { id: 'q' + Date.now(), year: BOARD_YEAR, subject: BOARD_SUBJ, title,
        text: text || '(No additional detail provided.)', author: name, votes: 1, time: Date.now(), answers: [] };
      if (BOARD_LEVEL) q.level = BOARD_LEVEL;
      questions.unshift(q);
      saveForumQuestions(questions);
      askForm.reset();
      currentSort = 'new';
      document.querySelectorAll('[data-sort]').forEach(c => c.classList.toggle('active', c.dataset.sort === 'new'));
      renderForum();
      showToast('Your question has been posted.');
      document.getElementById('q-list').scrollIntoView({ behavior: 'smooth' });
    };
  }

  document.querySelectorAll('[data-sort]').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('[data-sort]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSort = chip.dataset.sort;
      renderForum();
    };
  });
  const search = document.getElementById('forum-search');
  if (search) search.oninput = () => { searchTerm = search.value; renderForum(); };
});
