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

  // Per-stream "tier" icons (ascending difficulty: foothill -> summit + star)
  const LEVEL_ICONS = {
    standard1: svg('<path d="M7 37h34"/><path d="M15 37l9-12 9 12"/>'),
    standard2: svg('<path d="M7 37h34"/><path d="M11 37l7-9 7 9"/><path d="M25 37l8-12 8 12"/>'),
    advanced:  svg('<path d="M7 37h34"/><path d="M10 37l9-16 6 8 4-5 5 13"/><path d="M16 26l3-3 2 2"/>'),
    ext1:      svg('<path d="M7 37h34"/><path d="M12 37l12-19 12 19"/><path d="M24 18v-9M24 9h7l-2 2.5L31 14h-7"/>'),
    ext2:      svg('<path d="M7 37h34"/><path d="M9 37l10-15 6 8 3-4 5 11"/>', '<path d="M34 6l1.5 3.1 3.4.5-2.5 2.4.6 3.4L34 13.2 30.9 14.8l.6-3.4-2.5-2.4 3.4-.5z" fill="currentColor" stroke="none"/>'),
    core:      svg('<rect x="11" y="22" width="26" height="14" rx="2"/><path d="M11 29h26M18 22v14M30 22v14"/>'),
    davinci:   svg('<path d="M24 8l4.2 9.3L38 18l-7 6.2L33 34l-9-5-9 5 2-9.8L10 18l9.8-.7z"/>')
  };
  function tierKey(level){
    if (!level) return null;
    if (level === 'Core') return 'core';
    if (level === 'da Vinci') return 'davinci';
    if (level.indexOf('Extension 2') >= 0) return 'ext2';
    if (level.indexOf('Extension 1') >= 0) return 'ext1';
    if (level.indexOf('Advanced')    >= 0) return 'advanced';
    if (level.indexOf('Standard 2')  >= 0) return 'standard2';
    if (level.indexOf('Standard')    >= 0) return 'standard1';
    return null;
  }

  window.KNOX_ICON = function (subject, level) {
    const t = tierKey(level);
    if (t && LEVEL_ICONS[t]) return LEVEL_ICONS[t];
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
  // Stream-specific photos (fall back to the subject photo if not listed)
  const STREAM_PHOTO = {
    'Mathematics|Standard 2':'math-standard2',
    'Mathematics|Mathematics Advanced':'math-advanced',
    'Mathematics|Mathematics Extension 1':'math-ext1',
    'Mathematics|Mathematics Extension 2':'math-ext2',
    'Mathematics|da Vinci':'math-davinci',
    'English|Standard':'eng-standard',
    'English|Advanced':'eng-advanced',
    'English|Extension 1':'eng-ext1',
    'English|Extension 2':'eng-ext2'
  };
  window.KNOX_PHOTO = function (subject, level) {
    if (!subject) return null;
    if (level) {
      const sk = STREAM_PHOTO[subject + '|' + level];
      if (sk) return 'assets/img/subjects/' + sk + '.jpg';
    }
    const key = subject.indexOf('Mathematics') === 0 ? 'mathematics' : PHOTO_KEY[subject];
    return key ? 'assets/img/subjects/' + key + '.jpg' : null;
  };
})();
