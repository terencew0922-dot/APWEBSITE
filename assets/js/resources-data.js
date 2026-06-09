/* Shared resource library data — used by resources.html (full library) and
   index.html (per-year counts on the home year-gate). */

/* Curriculum subjects offered at each year level (drives the subject step). */
window.KNOX_SUBJECTS_BY_YEAR = {
  7:  ['English', 'Geography', 'History', 'Mathematics', 'Science'],
  8:  ['English', 'Geography', 'History', 'Mathematics', 'Science'],
  9:  ['Commerce', 'English', 'Geography', 'History', 'Mathematics', 'Science'],
  10: ['Commerce', 'English', 'Geography', 'History', 'Mathematics', 'Science'],
  11: ['Ancient History', 'Biology', 'Business Studies', 'Chemistry', 'Economics', 'English', 'Geography', 'Legal Studies', 'Mathematics', 'Modern History', 'Physics'],
  12: ['Ancient History', 'Biology', 'Business Studies', 'Chemistry', 'Economics', 'English', 'Geography', 'Legal Studies', 'Mathematics', 'Modern History', 'Physics']
};

window.KNOX_RESOURCES = [
  /* ---- Year 7 ---- */
  { subj:'English',     year:7,  type:'Study Guide',    title:'Reading &amp; Comprehension Pack',   desc:'Close-reading strategies and practice passages to build confident comprehension.', tags:['PDF'] },
  { subj:'Geography',   year:7,  type:'Atlas',          title:'Interactive Geography Atlas',        desc:'Climate, population and tectonics maps you can layer and explore.', tags:['Web'] },
  { subj:'History',     year:7,  type:'Study Guide',    title:'Ancient Civilisations Workbook',     desc:'Egypt, Greece and Rome — timelines, sources and key-term glossaries.', tags:['PDF'] },
  { subj:'Mathematics', year:7,  type:'Revision Guide', title:'Number &amp; Algebra Foundations',   desc:'Fractions, ratios and introductory algebra with worked examples.', tags:['PDF'] },
  { subj:'Science',     year:7,  type:'Interactive',    title:'Virtual Biology Lab',                desc:'Run dissections and cell experiments safely in an interactive simulation.', tags:['Web'] },

  /* ---- Year 8 ---- */
  { subj:'English',     year:8,  type:'Study Guide',    title:'Essay Writing Masterclass',          desc:'Structure, thesis statements and analysis techniques for top-band essays.', tags:['PDF'] },
  { subj:'History',     year:8,  type:'Notes',          title:'Medieval World Source Pack',         desc:'Feudalism, the Black Death and the Crusades through primary sources.', tags:['PDF'] },
  { subj:'Mathematics', year:8,  type:'Revision Guide', title:'Geometry &amp; Measurement Guide',   desc:'Angles, area, volume and Pythagoras with step-by-step worked solutions.', tags:['PDF'] },
  { subj:'Science',     year:8,  type:'Notes',          title:'Forces &amp; Energy Notes',          desc:'Mechanics fundamentals — forces, energy transfer and simple machines.', tags:['PDF'] },

  /* ---- Year 9 ---- */
  { subj:'Commerce',    year:9,  type:'Study Guide',    title:'Personal Finance Essentials',        desc:'Budgeting, banking and consumer rights for everyday financial decisions.', tags:['PDF'] },
  { subj:'Geography',   year:9,  type:'Notes',          title:'Sustainable Biomes Notes',           desc:'Biomes, food security and sustainability with case studies.', tags:['PDF'] },
  { subj:'Mathematics', year:9,  type:'Toolkit',        title:'Algebra &amp; Indices Workbook',     desc:'Expanding, factorising and index laws with practice sets.', tags:['PDF'] },
  { subj:'Science',     year:9,  type:'Revision Guide', title:'Chemistry: Bonding &amp; Reactions', desc:'Ionic, covalent and metallic bonding explained with clear diagrams.', tags:['PDF'] },

  /* ---- Year 10 ---- */
  { subj:'Commerce',    year:10, type:'Study Guide',    title:'Running a Small Business',           desc:'Enterprise, marketing and law basics for the Commerce elective.', tags:['PDF'] },
  { subj:'History',     year:10, type:'Study Guide',    title:'World Wars Study Guide',             desc:'Causes, key events and consequences of WWI and WWII.', tags:['PDF'] },
  { subj:'Mathematics', year:10, type:'Revision Guide', title:'Trigonometry Essentials',            desc:'Right-angle trig, the unit circle and bearings with worked problems.', tags:['PDF'] },
  { subj:'Science',     year:10, type:'Video Series',   title:'Earth &amp; Climate Science',        desc:'Documentary-style lessons connecting curriculum topics to real events.', tags:['Video'] },

  /* ---- Year 11 ---- */
  { subj:'Ancient History', year:11, type:'Past Papers',  title:'Pompeii &amp; Herculaneum Source Pack', desc:'Core study sources with model responses and analysis frameworks.', tags:['PDF'] },
  { subj:'Biology',     year:11, type:'Notes',          title:'Cells &amp; Genetics Study Notes',   desc:'Cell structure, DNA and inheritance summarised for the Preliminary course.', tags:['PDF'] },
  { subj:'Business Studies', year:11, type:'Study Guide', title:'Business Case Studies',            desc:'Nature of business and management with real Australian case studies.', tags:['Doc'] },
  { subj:'Legal Studies', year:11, type:'Study Guide',   title:'Crime &amp; the Legal System',      desc:'Criminal process, courts and key legislation with a term glossary.', tags:['PDF'] },
  { subj:'Mathematics', year:11, type:'Past Papers',     title:'Mathematics Advanced — Exam Pack',  desc:'Preliminary past papers with fully worked mark schemes and examiner tips.', tags:['PDF'] },
  { subj:'Modern History', year:11, type:'Past Papers',  title:'History Source Analysis Pack',      desc:'Source-based questions with model answers and the SOURCE technique.', tags:['PDF'] },

  /* ---- Year 12 ---- */
  { subj:'Chemistry',   year:12, type:'Revision Guide', title:'Organic Chemistry Reaction Map',     desc:'Functional groups and reaction pathways on a single revision sheet.', tags:['PDF'] },
  { subj:'Economics',   year:12, type:'Notes',          title:'Microeconomics Summary',             desc:'Markets, elasticity and government intervention summarised for the HSC.', tags:['PDF'] },
  { subj:'English',     year:12, type:'Reading List',   title:'Senior English Reading List',        desc:'Set texts and related material with discussion questions for the HSC.', tags:['Doc'] },
  { subj:'Mathematics', year:12, type:'Video Series',   title:'Calculus Crash Course',              desc:'Limits, differentiation and integration from scratch in 12 lessons.', tags:['Video'] },
  { subj:'Mathematics', year:12, type:'Toolkit',        title:'Statistics &amp; Probability Sheet', desc:'Distributions, hypothesis testing and probability rules at a glance.', tags:['PDF'] },
  { subj:'Physics',     year:12, type:'Notes',          title:'Physics Formula Sheet',              desc:'Every formula for modules 5–8 on two clean, organised pages.', tags:['PDF'] }
];
