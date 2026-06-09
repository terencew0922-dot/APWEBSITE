/* Shared resource library data — used by resources.html (full library) and
   index.html (per-year counts on the home year-gate). */

/* Curriculum subjects offered at each year level (drives the subject tabs). */
window.KNOX_SUBJECTS_BY_YEAR = {
  7:  ['English', 'Geography', 'History', 'Mathematics', 'Science'],
  8:  ['English', 'Geography', 'History', 'Mathematics', 'Science'],
  9:  ['Commerce', 'English', 'Geography', 'History', 'Mathematics', 'Science'],
  10: ['Commerce', 'English', 'Geography', 'History', 'Mathematics', 'Science'],
  11: ['Ancient History', 'Biology', 'Business Studies', 'Chemistry', 'Economics', 'English', 'Geography', 'Legal Studies', 'Mathematics', 'Modern History', 'Physics'],
  12: ['Ancient History', 'Biology', 'Business Studies', 'Chemistry', 'Economics', 'English', 'Geography', 'Legal Studies', 'Mathematics', 'Modern History', 'Physics']
};

/* Subjects that split into streams / course levels per year. */
window.KNOX_STREAMS = {
  Mathematics: {
    7:  ['Core', 'da Vinci'],
    8:  ['Core', 'da Vinci'],
    9:  ['Core', 'da Vinci'],
    10: ['Core', 'da Vinci'],
    11: ['Standard 1', 'Standard 2', 'Mathematics Advanced', 'Mathematics Extension 1'],
    12: ['Standard 1', 'Standard 2', 'Mathematics Advanced', 'Mathematics Extension 1', 'Mathematics Extension 2']
  },
  English: {
    11: ['Standard', 'Advanced', 'Extension 1'],
    12: ['Standard', 'Advanced', 'Extension 1', 'Extension 2']
  }
};

window.KNOX_RESOURCES = [
  /* ---- Year 7 ---- */
  { subj:'English',     year:7,  type:'Study Guide',    title:'Reading &amp; Comprehension Pack',   desc:'Close-reading strategies and practice passages to build confident comprehension.', tags:['PDF'] },
  { subj:'Geography',   year:7,  type:'Atlas',          title:'Interactive Geography Atlas',        desc:'Climate, population and tectonics maps you can layer and explore.', tags:['Web'] },
  { subj:'History',     year:7,  type:'Study Guide',    title:'Ancient Civilisations Workbook',     desc:'Egypt, Greece and Rome — timelines, sources and key-term glossaries.', tags:['PDF'] },
  { subj:'Mathematics', year:7,  level:'Core',     type:'Revision Guide', title:'Number &amp; Algebra Foundations', desc:'Fractions, ratios and introductory algebra with worked examples.', tags:['PDF'] },
  { subj:'Mathematics', year:7,  level:'da Vinci', type:'Toolkit',        title:'da Vinci — Problem-Solving Challenges', desc:'Extension problems and competition-style puzzles for the accelerated class.', tags:['PDF'] },
  { subj:'Science',     year:7,  type:'Interactive',    title:'Virtual Biology Lab',                desc:'Run dissections and cell experiments safely in an interactive simulation.', tags:['Web'] },

  /* ---- Year 8 ---- */
  { subj:'English',     year:8,  type:'Study Guide',    title:'Essay Writing Masterclass',          desc:'Structure, thesis statements and analysis techniques for top-band essays.', tags:['PDF'] },
  { subj:'History',     year:8,  type:'Notes',          title:'Medieval World Source Pack',         desc:'Feudalism, the Black Death and the Crusades through primary sources.', tags:['PDF'] },
  { subj:'Mathematics', year:8,  level:'Core',     type:'Revision Guide', title:'Geometry &amp; Measurement Guide', desc:'Angles, area, volume and Pythagoras with step-by-step worked solutions.', tags:['PDF'] },
  { subj:'Mathematics', year:8,  level:'da Vinci', type:'Toolkit',        title:'da Vinci — Linear Relationships', desc:'Accelerated work on gradients, equations and simultaneous lines.', tags:['PDF'] },
  { subj:'Science',     year:8,  type:'Notes',          title:'Forces &amp; Energy Notes',          desc:'Mechanics fundamentals — forces, energy transfer and simple machines.', tags:['PDF'] },

  /* ---- Year 9 ---- */
  { subj:'Commerce',    year:9,  type:'Study Guide',    title:'Personal Finance Essentials',        desc:'Budgeting, banking and consumer rights for everyday financial decisions.', tags:['PDF'] },
  { subj:'Geography',   year:9,  type:'Notes',          title:'Sustainable Biomes Notes',           desc:'Biomes, food security and sustainability with case studies.', tags:['PDF'] },
  { subj:'Mathematics', year:9,  level:'Core',     type:'Toolkit',        title:'Algebra &amp; Indices Workbook', desc:'Expanding, factorising and index laws with practice sets.', tags:['PDF'] },
  { subj:'Mathematics', year:9,  level:'da Vinci', type:'Revision Guide', title:'da Vinci — Proof &amp; Reasoning', desc:'Surds, deductive geometry and early calculus for the accelerated class.', tags:['PDF'] },
  { subj:'Science',     year:9,  type:'Revision Guide', title:'Chemistry: Bonding &amp; Reactions', desc:'Ionic, covalent and metallic bonding explained with clear diagrams.', tags:['PDF'] },

  /* ---- Year 10 ---- */
  { subj:'Commerce',    year:10, type:'Study Guide',    title:'Running a Small Business',           desc:'Enterprise, marketing and law basics for the Commerce elective.', tags:['PDF'] },
  { subj:'History',     year:10, type:'Study Guide',    title:'World Wars Study Guide',             desc:'Causes, key events and consequences of WWI and WWII.', tags:['PDF'] },
  { subj:'Mathematics', year:10, level:'Core',     type:'Revision Guide', title:'Trigonometry Essentials', desc:'Right-angle trig, the unit circle and bearings with worked problems.', tags:['PDF'] },
  { subj:'Mathematics', year:10, level:'da Vinci', type:'Past Papers',    title:'da Vinci — Advanced Preparation', desc:'Bridging material that previews Year 11 Advanced and Extension topics.', tags:['PDF'] },
  { subj:'Science',     year:10, type:'Video Series',   title:'Earth &amp; Climate Science',        desc:'Documentary-style lessons connecting curriculum topics to real events.', tags:['Video'] },

  /* ---- Year 11 ---- */
  { subj:'Ancient History', year:11, type:'Past Papers',  title:'Pompeii &amp; Herculaneum Source Pack', desc:'Core study sources with model responses and analysis frameworks.', tags:['PDF'] },
  { subj:'Biology',     year:11, type:'Notes',          title:'Cells &amp; Genetics Study Notes',   desc:'Cell structure, DNA and inheritance summarised for the Preliminary course.', tags:['PDF'] },
  { subj:'Business Studies', year:11, type:'Study Guide', title:'Business Case Studies',            desc:'Nature of business and management with real Australian case studies.', tags:['Doc'] },
  { subj:'Legal Studies', year:11, type:'Study Guide',   title:'Crime &amp; the Legal System',      desc:'Criminal process, courts and key legislation with a term glossary.', tags:['PDF'] },
  { subj:'Mathematics', year:11, level:'Standard 2',           type:'Study Guide', title:'Standard 2 — Financial Mathematics', desc:'Earning, investing and depreciation with HSC-style questions.', tags:['PDF'] },
  { subj:'Mathematics', year:11, level:'Mathematics Advanced', type:'Past Papers', title:'Advanced — Preliminary Exam Pack', desc:'Preliminary past papers with fully worked mark schemes and tips.', tags:['PDF'] },
  { subj:'Mathematics', year:11, level:'Mathematics Extension 1', type:'Revision Guide', title:'Extension 1 — Further Calculus', desc:'Polynomials, further calculus and combinatorics with practice.', tags:['PDF'] },
  { subj:'English',     year:11, level:'Standard',    type:'Notes',        title:'Standard — Reading to Write', desc:'Common Module notes and writing skills for the Preliminary Standard course.', tags:['PDF'] },
  { subj:'English',     year:11, level:'Advanced',    type:'Study Guide',  title:'Advanced — Texts &amp; Human Experiences', desc:'Analysis frameworks and sample paragraphs for the Advanced Common Module.', tags:['PDF'] },
  { subj:'English',     year:11, level:'Extension 1', type:'Reading List', title:'Extension 1 — Genre Study', desc:'Wider reading and theory for the Preliminary Extension 1 elective.', tags:['Doc'] },
  { subj:'Modern History', year:11, type:'Past Papers',  title:'History Source Analysis Pack',      desc:'Source-based questions with model answers and the SOURCE technique.', tags:['PDF'] },

  /* ---- Year 12 ---- */
  { subj:'Chemistry',   year:12, type:'Revision Guide', title:'Organic Chemistry Reaction Map',     desc:'Functional groups and reaction pathways on a single revision sheet.', tags:['PDF'] },
  { subj:'Economics',   year:12, type:'Notes',          title:'Microeconomics Summary',             desc:'Markets, elasticity and government intervention summarised for the HSC.', tags:['PDF'] },
  { subj:'English',     year:12, level:'Advanced',    type:'Reading List', title:'Advanced — Prescribed Text List', desc:'Prescribed texts and related material with discussion questions for the HSC.', tags:['Doc'] },
  { subj:'English',     year:12, level:'Standard',    type:'Past Papers',  title:'Standard — HSC Practice Papers', desc:'Past HSC papers for the Common Module and electives with marking guidelines.', tags:['PDF'] },
  { subj:'English',     year:12, level:'Extension 1', type:'Study Guide',  title:'Extension 1 — Elective Study Guide', desc:'Notes and sample responses for the Extension 1 electives and Common Module.', tags:['PDF'] },
  { subj:'English',     year:12, level:'Extension 2', type:'Notes',        title:'Extension 2 — Major Work Handbook', desc:'Planning, drafting and reflection guidance for the Extension 2 major work.', tags:['Doc'] },
  { subj:'Mathematics', year:12, level:'Standard 2',           type:'Past Papers',  title:'Standard 2 — HSC Practice Papers', desc:'Full HSC practice papers with worked solutions and marking notes.', tags:['PDF'] },
  { subj:'Mathematics', year:12, level:'Mathematics Advanced', type:'Video Series', title:'Advanced — Calculus Crash Course', desc:'Differentiation and integration from scratch in 12 short lessons.', tags:['Video'] },
  { subj:'Mathematics', year:12, level:'Mathematics Extension 1', type:'Toolkit',   title:'Extension 1 — HSC Revision Sheet', desc:'Vectors, projectile motion and the binomial theorem at a glance.', tags:['PDF'] },
  { subj:'Mathematics', year:12, level:'Mathematics Extension 2', type:'Notes',     title:'Extension 2 — Complex Numbers &amp; Mechanics', desc:'Complex numbers, mechanics and proof for the hardest HSC course.', tags:['PDF'] },
  { subj:'Physics',     year:12, type:'Notes',          title:'Physics Formula Sheet',              desc:'Every formula for modules 5–8 on two clean, organised pages.', tags:['PDF'] }
];
