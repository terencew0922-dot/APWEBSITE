/* Small original line-art icons per subject (gold via currentColor). */
(function () {
  const svg = (paths, extra) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${extra||''}${paths}</svg>`;
  const dot = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" stroke="none"/>`;

  const ICONS = {
    // open book
    English: svg('<path d="M24 13c-3-2-7-3-12-3v26c5 0 9 1 12 3 3-2 7-3 12-3V10c-5 0-9 1-12 3Z"/><path d="M24 13v26"/>'),
    // globe
    Geography: svg('<circle cx="24" cy="24" r="15"/><path d="M9 24h30"/><path d="M24 9c5 6 5 24 0 30M24 9c-5 6-5 24 0 30"/>'),
    // open scroll
    History: svg('<path d="M15 13h15a3 3 0 0 1 3 3v22H18a3 3 0 0 1-3-3V13Z"/><path d="M15 13a3 3 0 0 0-3 3 3 3 0 0 0 3 3M33 38a3 3 0 0 0 3-3 3 3 0 0 0-3-3M20 21h8M20 27h8"/>'),
    // pi symbol
    Mathematics: svg('<path d="M12 16h24"/><path d="M18 16v15M30 16v13c0 2 2 2 4 1"/>'),
    // atom
    Science: svg('<ellipse cx="24" cy="24" rx="15" ry="6"/><ellipse cx="24" cy="24" rx="15" ry="6" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="15" ry="6" transform="rotate(120 24 24)"/>', dot(24,24,2.5)),
    // stacked coins
    Commerce: svg('<ellipse cx="24" cy="14" rx="11" ry="4"/><path d="M13 14v6c0 2.2 5 4 11 4s11-1.8 11-4v-6"/><path d="M13 20v6c0 2.2 5 4 11 4s11-1.8 11-4v-6"/><path d="M13 26v6c0 2.2 5 4 11 4s11-1.8 11-4v-6"/>'),
    // Greek temple / ruins
    'Ancient History': svg('<path d="M10 16l14-7 14 7M12 16v18M19 16v18M29 16v18M36 16v18M9 38h30M14 16h20"/>'),
    // DNA helix
    Biology: svg('<path d="M18 9c0 9 12 12 12 15s-12 6-12 15M30 9c0 9-12 12-12 15s12 6 12 15"/><path d="M19 14h10M21 19h6M21 29h6M19 34h10"/>'),
    // briefcase
    'Business Studies': svg('<rect x="9" y="16" width="30" height="21" rx="2"/><path d="M18 16v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M9 25h30"/>'),
    // flask
    Chemistry: svg('<path d="M20 9h8M22 9v9L13 34a2 2 0 0 0 2 3h18a2 2 0 0 0 2-3l-9-16V9"/><path d="M17 28h14"/>', dot(21,30,1.4)+dot(27,32,1.4)),
    // chart trending up
    Economics: svg('<path d="M10 10v28h28"/><path d="M16 31l6-7 5 4 8-11"/><path d="M31 17h4v4"/>'),
    // scales of justice
    'Legal Studies': svg('<path d="M24 11v27M15 38h18"/><path d="M11 18h26M24 14l-13 4M24 14l13 4"/><path d="M11 18l-4 8a4 4 0 0 0 8 0l-4-8ZM37 18l-4 8a4 4 0 0 0 8 0l-4-8Z"/>'),
    // clock
    'Modern History': svg('<circle cx="24" cy="24" r="14"/><path d="M24 16v8l6 4"/>'),
    // orbit
    Physics: svg('<ellipse cx="24" cy="24" rx="6" ry="15" transform="rotate(45 24 24)"/><ellipse cx="24" cy="24" rx="6" ry="15" transform="rotate(-45 24 24)"/>', dot(24,24,2.5)+dot(35,13,2)),
    // fallback: document
    default: svg('<path d="M15 9h12l8 8v22H15Z"/><path d="M27 9v8h8M20 25h8M20 31h8"/>')
  };

  window.KNOX_ICON = function (subject) {
    if (!subject) return ICONS.default;
    if (subject.indexOf('Mathematics') === 0) return ICONS.Mathematics;
    return ICONS[subject] || ICONS.default;
  };

  const PHOTO_KEY = {
    'English':'english','Geography':'geography','History':'history','Mathematics':'mathematics',
    'Science':'science','Commerce':'commerce','Ancient History':'ancient-history','Biology':'biology',
    'Business Studies':'business-studies','Chemistry':'chemistry','Economics':'economics',
    'Legal Studies':'legal-studies','Modern History':'modern-history','Physics':'physics'
  };
  window.KNOX_PHOTO = function (subject) {
    if (!subject) return null;
    const key = subject.indexOf('Mathematics') === 0 ? 'mathematics' : PHOTO_KEY[subject];
    return key ? 'assets/img/subjects/' + key + '.jpg' : null;
  };
})();
