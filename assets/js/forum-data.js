/* Shared Q&A forum data + persistence (localStorage).
   Each question carries a year, subject and (for Maths/English) a stream level,
   so it only appears on its own Year + Subject board. */
(function () {
  const STORE_KEY = 'knox_forum_v3';
  const h = n => Date.now() - 1000 * 60 * 60 * n;

  const SEED = [
    { id:'s1', year:11, subject:'Chemistry', title:'How do I balance redox reactions quickly?',
      text:"I keep losing marks balancing redox equations under exam pressure. Any reliable step-by-step method?",
      author:'Maya R.', votes:24, time:h(5), answers:[
        { text:"Use the half-reaction method: split into oxidation and reduction, balance atoms, then balance charge with electrons, then combine. Practising a few each day makes it automatic.", author:'Mr. Okafor (Teacher)', teacher:true, accepted:true, time:h(4) },
        { text:"Writing oxidation numbers above each element first really helped me spot what changes.", author:'Liam P.', time:h(3) }
      ]},
    { id:'s2', year:11, subject:'Modern History', title:'Best way to structure a source-analysis essay?',
      text:"What structure do markers actually want for the source-analysis question? My introductions take forever.",
      author:'Daniel K.', votes:18, time:h(26), answers:[
        { text:"State your point, give the source's origin, use the evidence, assess reliability, then connect back to the question. Keep the intro to two sentences.", author:'Ms. Bennett (Teacher)', teacher:true, accepted:true, time:h(25) }
      ]},
    { id:'s3', year:10, subject:'Mathematics', level:'Core', title:'Tips for quadratic word problems?',
      text:"I can solve quadratics fine, but turning word problems into equations confuses me. How do you set them up?",
      author:'Sofia L.', votes:31, time:h(50), answers:[
        { text:"Define your variable in words first ('let x = number of hours'). Underline the unknowns and relationship words, then translate line by line.", author:'Aarav S.', time:h(48) }
      ]},
    { id:'s4', year:12, subject:'English', level:'Advanced', title:'Wider reading for the Advanced course?',
      text:"What related texts pair well with the prescribed texts for Module A this year?",
      author:'Noah T.', votes:12, time:h(72), answers:[] },
    { id:'s5', year:7, subject:'Mathematics', level:'Core', title:'Adding fractions with different denominators?',
      text:"I get stuck when the bottom numbers are different. What's the trick?",
      author:'Ethan W.', votes:9, time:h(8), answers:[
        { text:"Find a common denominator (often just multiply the two), convert both fractions, then add the tops. Simplify at the end.", author:'Miss Tan (Teacher)', teacher:true, accepted:true, time:h(7) }
      ]},
    { id:'s6', year:8, subject:'Science', title:"Difference between mass and weight?",
      text:"My teacher said they're not the same but I keep mixing them up. Help?",
      author:'Olivia C.', votes:14, time:h(20), answers:[
        { text:"Mass is how much matter is in something (kg) and never changes. Weight is the force of gravity on that mass (newtons) and changes with gravity.", author:'Hugo M.', time:h(19) }
      ]},
    { id:'s7', year:12, subject:'Mathematics', level:'Mathematics Advanced', title:'How do you remember integration rules?',
      text:"There are so many integration techniques. How do you keep them straight for the HSC?",
      author:'Priya S.', votes:21, time:h(30), answers:[] },
    { id:'s8', year:11, subject:'Biology', title:'Mitosis vs meiosis — how to tell them apart?',
      text:"I always confuse the two. Any way to remember which is which?",
      author:'Jack D.', votes:16, time:h(40), answers:[
        { text:"Mitosis = one division, two identical cells (for growth/repair). Meiosis = two divisions, four different cells (for gametes). 'Mei-osis makes eggs/sperm.'", author:'Dr. Lewis (Teacher)', teacher:true, accepted:true, time:h(38) }
      ]}
  ];

  window.loadForumQuestions = function () {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) return JSON.parse(raw); } catch (e) {}
    localStorage.setItem(STORE_KEY, JSON.stringify(SEED));
    return JSON.parse(JSON.stringify(SEED));
  };
  window.saveForumQuestions = function (qs) { localStorage.setItem(STORE_KEY, JSON.stringify(qs)); };
})();
