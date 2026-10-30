import { Course, Lesson, QuizQuestion, Project, CommunityPost } from '../types';

export const COURSES: Course[] = [
  {
    id: 'html',
    titleSo: 'HTML5 Aasaasiga ah',
    titleEn: 'HTML5 Fundamentals',
    descSo: 'Baro sida loo dhiso qaab-dhismeedka bogagga internetka iyadoo la adeegsanayo HTML5.',
    descEn: 'Learn to build the structure of web pages using HTML5 tags and semantics.',
    category: 'html',
    levelSo: 'Bilow (Beginner)',
    levelEn: 'Beginner',
    lessonsCount: 6,
    icon: 'FileCode',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'css',
    titleSo: 'CSS3 Qurxinta & Naqshadaynta',
    titleEn: 'CSS3 Styling & Layouts',
    descSo: 'Baro sida loo qurxiyo bogagga internetka, Flexbox, Grid, iyo Mobile Responsive.',
    descEn: 'Master CSS styling, Flexbox, CSS Grid, and responsive mobile design.',
    category: 'css',
    levelSo: 'Bilow ilaa Dhexe',
    levelEn: 'Beginner to Intermediate',
    lessonsCount: 6,
    icon: 'Palette',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'js',
    titleSo: 'JavaScript Casri ah',
    titleEn: 'Modern JavaScript',
    descSo: 'Ka dhig bogaggaaga kuwo firfircoon oo falcelin leh adoo baranaya JavaScript (ES6+).',
    descEn: 'Add interactivity and logic to web pages using modern JavaScript (ES6+).',
    category: 'js',
    levelSo: 'Dhexe (Intermediate)',
    levelEn: 'Intermediate',
    lessonsCount: 8,
    icon: 'Terminal',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'python',
    titleSo: 'Python Programming',
    titleEn: 'Python Programming',
    descSo: 'Luqadda ugu caansan adduunka ee AI, Data Science, iyo Back-end development.',
    descEn: 'The world’s most popular language for AI, Data Science, and backend apps.',
    category: 'python',
    levelSo: 'Bilow ilaa Sare',
    levelEn: 'Beginner to Advanced',
    lessonsCount: 7,
    icon: 'Cpu',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'git',
    titleSo: 'Git & GitHub',
    titleEn: 'Git & GitHub Version Control',
    descSo: 'Baro sida loo ilaaliyo code-kaaga iyo sida loola shaqeeyo horumariyeyaasha kale.',
    descEn: 'Learn version control, branching, committing, and collaborating on GitHub.',
    category: 'git',
    levelSo: 'Muhiim (Essential)',
    levelEn: 'Essential',
    lessonsCount: 4,
    icon: 'GitBranch',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'web',
    titleSo: 'Web Development Dhameystiran',
    titleEn: 'Full-Stack Web Development',
    descSo: 'Isku xir HTML, CSS, JavaScript iyo hababka casriga ah si aad u dhisato app buuxa.',
    descEn: 'Combine frontend and backend skills to build fully functional web applications.',
    category: 'web',
    levelSo: 'Heer Sare (Advanced)',
    levelEn: 'Advanced',
    lessonsCount: 6,
    icon: 'Globe',
    color: 'from-indigo-500 to-violet-600'
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'html-1',
    courseId: 'html',
    titleSo: 'Hordhaca HTML & Sumadaha (Tags)',
    titleEn: 'Introduction to HTML & Tags',
    definitionSo: 'HTML (HyperText Markup Language) waa luqadda loo adeegsado in lagu dhiso lana habeeyo qaab-dhismeedka bog kasta oo internetka ah.',
    definitionEn: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
    explanationSo: 'Markaad dhiseyso guri, HTML waa alwaaxyada iyo darbiyada taagan. Waxay ka kooban tahay "Tags" ama sumado ay ka mid yihiin <html>, <head>, iyo <body> kuwaas oo birowser-ka u sheegaya sida uu boggu u eg yahay.',
    explanationEn: 'Think of HTML as the skeleton of a house. It uses tags like <html>, <head>, and <body> to structure content on the web.',
    codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>Boggeyga Koowaad</title>
  </head>
  <body>
    <h1>Ku soo dhowow Coler-Code!</h1>
    <p>Kani waa boggeyga ugu horreeya ee HTML.</p>
  </body>
</html>`,
    lineByLineSo: [
      { line: 1, code: '<!DOCTYPE html>', descSo: 'Waxay u sheegaysaa birowser-ka inuu isticmaalayo HTML5 casri ah.' },
      { line: 2, code: '<html>', descSo: 'Sumadda ugu weyn ee barnaamijka HTML bilaabaysa.' },
      { line: 3, code: '<head>', descSo: 'Qaybta madaxa oo ay ku jiraan cinwaanka bogga iyo xogta qarsoon.' },
      { line: 5, code: '<body>', descSo: 'Qaybta muuqata ee isticmaaluhu arko marka uu bogga furo.' },
      { line: 6, code: '<h1>Ku soo dhowow Coler-Code!</h1>', descSo: 'Cinwaan weyn (Heading 1).' },
      { line: 7, code: '<p>Kani waa boggeyga ugu horreeya...</p>', descSo: 'Aayad ama cutub qoraal ah (Paragraph).' }
    ],
    lineByLineEn: [
      { line: 1, code: '<!DOCTYPE html>', descEn: 'Declares the document type as HTML5.' },
      { line: 2, code: '<html>', descEn: 'Root element of the HTML page.' },
      { line: 3, code: '<head>', descEn: 'Contains metadata and page title.' },
      { line: 5, code: '<body>', descEn: 'Contains visible content.' },
      { line: 6, code: '<h1>Ku soo dhowow Coler-Code!</h1>', descEn: 'Main heading element.' },
      { line: 7, code: '<p>Kani waa boggeyga ugu horreeya...</p>', descEn: 'Paragraph text element.' }
    ],
    expectedOutputSo: 'Boggu wuxuu soo bandhigi doonaa cinwaan weyn oo leh "Ku soo dhowow Coler-Code!" iyo qoraal hoose oo sharaxaya.',
    expectedOutputEn: 'The browser displays a bold heading and paragraph text.',
    commonMistakesSo: [
      'Ilowshaha xiritaanka sumadaha (closing tags sida </p> ama </h1>).',
      'Isticmaalka xarfaha waaweyn ee aan saxda ahayn magacyada sumadaha.',
      'In aan la xirin <!DOCTYPE html> si sax ah.'
    ],
    commonMistakesEn: [
      'Forgetting closing tags (e.g., missing </p>).',
      'Case sensitivity errors in tag names.',
      'Missing DOCTYPE declaration.'
    ],
    exerciseSo: {
      task: 'Samee hordhac adoo isticmaalaya sumadda <h1> oo leh qoraalka "Soo Dhowow" iyo sumadda <p> oo leh magacaaga.',
      starterCode: '<!\DOCTYPE html>\n<html>\n  <body>\n    <!-- Qor halkaan -->\n  </body>\n</html>',
      solution: '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Soo Dhowow</h1>\n    <p>Magacaygu waa Arday Coler-Code.</p>\n  </body>\n</html>'
    },
    exerciseEn: {
      task: 'Create an <h1> heading with "Welcome" and a <p> paragraph with your name.',
      starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- Write code here -->\n  </body>\n</html>',
      solution: '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Welcome</h1>\n    <p>My name is Coler-Code Student.</p>\n  </body>\n</html>'
    },
    durationMin: 15
  },
  {
    id: 'html-2',
    courseId: 'html',
    titleSo: 'Qoraallada, Xiriiriyeyaasha & Sawirrada',
    titleEn: 'Text, Links & Images in HTML',
    definitionSo: 'Sida loo geliyo tixraacyada (Links) iyo sawirrada (Images) si boggaagu u noqdo mid isku xiran oo soo jiidasho leh.',
    definitionEn: 'How to insert hyperlinks (<a>) and images (<img>) to enrich web content.',
    explanationSo: 'Sumadda <a> waxay kuu saamaxaysaa inaad dadka u dirto bogag kale, halka <img> ay soo bandhigayso sawirro qurux badan.',
    explanationEn: 'The <a> tag creates hyperlinks to other pages, while the <img> tag displays images using the src attribute.',
    codeExample: `<!-- Xiriiriye iyo Sawir -->
<a href="https://google.com">Booqo Google</a>
<br><br>
<img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159" alt="Coding" width="300">`,
    lineByLineSo: [
      { line: 2, code: '<a href="...">Booqo Google</a>', descSo: 'Sumadda a waxay abuurtaa xiriiriye (link) iyadoo href ay tahay cinwaanka la aadayo.' },
      { line: 4, code: '<img src="..." alt="Coding" width="300">', descSo: 'Sumadda img waxay soo bandhigaysaa sawir. Alt waa sharaxaad haddii sawirku cilladaysnaado.' }
    ],
    lineByLineEn: [
      { line: 2, code: '<a href="...">Booqo Google</a>', descEn: 'Creates a hyperlink with target URL in href.' },
      { line: 4, code: '<img src="..." alt="Coding" width="300">', descEn: 'Displays an image with alternative text and width.' }
    ],
    expectedOutputSo: 'Wuxuu soo bandhigayaa xiriiriye la gujin karo iyo sawir kombiyuutar.',
    expectedOutputEn: 'Displays a clickable link and a computer image.',
    commonMistakesSo: [
      'Ilowshaha calaamadda xigashada (" ") ee ku jirta href ama src.',
      'Inaan la bixin alt text sawirka.',
    ],
    commonMistakesEn: [
      'Forgetting quotation marks in attributes.',
      'Omitting alt text for accessibility.'
    ],
    exerciseSo: {
      task: 'Samee xiriiriye u jeeda bogga https://coler-code.app oo leh qoraalka "Bogga Weyn".',
      starterCode: '<!-- Ku dar xiriiriyaha halkan -->',
      solution: '<a href="https://coler-code.app">Bogga Weyn</a>'
    },
    exerciseEn: {
      task: 'Create a link to https://coler-code.app with anchor text "Main Site".',
      starterCode: '<!-- Add link here -->',
      solution: '<a href="https://coler-code.app">Main Site</a>'
    },
    durationMin: 20
  },
  {
    id: 'css-1',
    courseId: 'css',
    titleSo: 'Hordhaca CSS3 & Midabada',
    titleEn: 'Introduction to CSS3 & Colors',
    definitionSo: 'CSS (Cascading Style Sheets) waa luqadda loo isticmaalo in lagu qurxiyo laguna habeeyo midabada, xarfaha, iyo boosaska bogga HTML.',
    definitionEn: 'CSS styles the HTML structure, controlling colors, fonts, layouts, and responsiveness.',
    explanationSo: 'Haddii HTML uu yahay dhismaha guriga, CSS waa rinjiga, daahyada, iyo alaabta guriga lagu qurxiyo.',
    explanationEn: 'If HTML is the skeleton, CSS is the paint, furniture, and interior design.',
    codeExample: `/* Tusaale CSS */
body {
  background-color: #0b0f19;
  color: #00f0ff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
  padding: 40px;
}
h1 {
  font-size: 2.5rem;
}`,
    lineByLineSo: [
      { line: 2, code: 'body {', descSo: 'Waxay beegsanaysaa dhammaan qaybta jirka ee bogga.' },
      { line: 3, code: 'background-color: #0b0f19;', descSo: 'Waxay dejinaysaa midabka asalka (background) midab madow oo buluug ah.' },
      { line: 4, code: 'color: #00f0ff;', descSo: 'Waxay dejinaysaa midabka qoraalka midab cyan dhalaalaya.' }
    ],
    lineByLineEn: [
      { line: 2, code: 'body {', descEn: 'Targets the main body element.' },
      { line: 3, code: 'background-color: #0b0f19;', descEn: 'Sets dark navy background color.' },
      { line: 4, code: 'color: #00f0ff;', descEn: 'Sets bright cyan text color.' }
    ],
    expectedOutputSo: 'Bogga waxaa lagu qurxin doonaa asal madow iyo qoraal cyan ah.',
    expectedOutputEn: 'The page gets a dark navy background and cyan glowing text.',
    commonMistakesSo: [
      'Ilowshaha semicolon (;) ee dhammaadka sadar kasta oo hantida ah.',
      'Ilowshaha xiritaanka curiyaha qawska { }.'
    ],
    commonMistakesEn: [
      'Missing semicolon at the end of style rules.',
      'Forgetting curly braces.'
    ],
    exerciseSo: {
      task: 'Qor code CSS ah oo ka dhigaya qoraalka h1 midabkiisu yahay #00f0ff.',
      starterCode: 'h1 {\n  /* Ku dar midabka halkan */\n}',
      solution: 'h1 {\n  color: #00f0ff;\n}'
    },
    exerciseEn: {
      task: 'Write CSS to make h1 text color #00f0ff.',
      starterCode: 'h1 {\n  /* Add color here */\n}',
      solution: 'h1 {\n  color: #00f0ff;\n}'
    },
    durationMin: 20
  },
  {
    id: 'js-1',
    courseId: 'js',
    titleSo: 'Hordhaca JavaScript & Doorsoomayaasha (Variables)',
    titleEn: 'Intro to JavaScript & Variables',
    definitionSo: 'JavaScript waa luqadda barnaamij-samaynta ee siisa bogagga internetka maskax iyo caqli, taasoo u sahlaysa inay la falgalaan isticmaalaha.',
    definitionEn: 'JavaScript brings web pages to life with interactivity, logic, calculations, and dynamic updates.',
    explanationSo: 'Doorsoomayaasha (Variables) waa sanduuqyo yar yar oo aan ku keydinno xog sida magacyada, lambarrada, ama xaaladaha.',
    explanationEn: 'Variables are storage containers for data values such as strings, numbers, and booleans.',
    codeExample: `// Qoraal ku keydinaya xog
let magaca = "Ahmed";
let da'da = 22;
let waaArday = true;

console.log("Soo dhowow " + magaca + ", da'daadu waa " + da'da);`,
    lineByLineSo: [
      { line: 2, code: 'let magaca = "Ahmed";', descSo: 'Waxay abuuraysaa doorsoome magaca oo xambaarsan qoraalka "Ahmed".' },
      { line: 3, code: 'let da\'da = 22;', descSo: 'Waxay abuuraysaa doorsoome lambar ah.' },
      { line: 6, code: 'console.log(...);', descSo: 'Waxay ku daabacaysaa fariinta console-ka kombiyuutarada.' }
    ],
    lineByLineEn: [
      { line: 2, code: 'let magaca = "Ahmed";', descEn: 'Declares string variable magaca.' },
      { line: 3, code: 'let da\'da = 22;', descEn: 'Declares number variable da\'da.' },
      { line: 6, code: 'console.log(...);', descEn: 'Prints output to developer console.' }
    ],
    expectedOutputSo: 'Wuxuu soo saarayaa fariin oranaysa "Soo dhowow Ahmed, da\'daadu waa 22".',
    expectedOutputEn: 'Outputs "Soo dhowow Ahmed, da\'daadu waa 22".',
    commonMistakesSo: [
      'Isticmaalka calaamado aan sax ahayn ama ilowshaha xigashada qoraalka.',
      'Khalad ku yimaada higgaadda magacyada doorsoomayaasha.'
    ],
    commonMistakesEn: [
      'Unquoted string values.',
      'Spelling mismatches in variable names.'
    ],
    exerciseSo: {
      task: 'Abuur doorsoome la yiraahdo "magacaaga" oo ay ku jirto magacaabistaada, kadib ku daabac console.log.',
      starterCode: 'let magacaaga = "";\nconsole.log(magacaaga);',
      solution: 'let magacaaga = "Maxamed";\nconsole.log(magacaaga);'
    },
    exerciseEn: {
      task: 'Create a variable named "myname" with your name, then log it to console.',
      starterCode: 'let myname = "";\nconsole.log(myname);',
      solution: 'let myname = "Mohamed";\nconsole.log(myname);'
    },
    durationMin: 25
  },
  {
    id: 'python-1',
    courseId: 'python',
    titleSo: 'Hordhaca Python & Daabacaadda (Print)',
    titleEn: 'Python Introduction & Print',
    definitionSo: 'Python waa luqad caan ah, fudud, oo aad uga akhris badan luqadaha kale, taasoo loo isticmaalo sirdoonka macmal (AI) iyo automation.',
    definitionEn: 'Python is a high-level, interpreted programming language known for its clear syntax and readability.',
    explanationSo: 'Amarada Python waa kuwo aad ugu dhow luqadda Ingiriiska ee caadiga ah, taasoo ka dhigaysa mid ku habboon bilowga.',
    explanationEn: 'Python syntax reads like plain English, making it beginner-friendly.',
    codeExample: `# Barnaamijkaaga ugu horreeya ee Python
magaca = "Fatuma"
print("Salam, " + magaca + "! Ku soo dhowow Python.")`,
    lineByLineSo: [
      { line: 1, code: '# Barnaamijkaaga...', descSo: 'Faallo (Comment) aan la fulin oo lagu sharxayo code-ka.' },
      { line: 2, code: 'magaca = "Fatuma"', descSo: 'Keydinta qoraalka magaca gudaha doorsoomaha.' },
      { line: 3, code: 'print(...)', descSo: 'Amarka daabacaadda ee soo saaraya natiijada.' }
    ],
    lineByLineEn: [
      { line: 1, code: '# Barnaamijkaaga...', descEn: 'Comment ignored by Python interpreter.' },
      { line: 2, code: 'magaca = "Fatuma"', descEn: 'Assigns string value to variable.' },
      { line: 3, code: 'print(...)', descEn: 'Outputs text to the screen.' }
    ],
    expectedOutputSo: 'Salam, Fatuma! Ku soo dhowow Python.',
    expectedOutputEn: 'Salam, Fatuma! Ku soo dhowow Python.',
    commonMistakesSo: [
      'Ilowshaha xigashada ama isticmaalka xarfaha aan sax ahayn.',
      'Cillad xagga meelaha bannaan (Indentation errors) oo aad muhiim ugu ah Python.'
    ],
    commonMistakesEn: [
      'Missing string quotes.',
      'Indentation errors which Python strictly enforces.'
    ],
    exerciseSo: {
      task: 'Qor code Python ah oo daabacaya "Baro Coding, Dhiso Mustaqbalkaaga".',
      starterCode: '# Ku qor halkaan\n',
      solution: 'print("Baro Coding, Dhiso Mustaqbalkaaga")'
    },
    exerciseEn: {
      task: 'Write Python code printing "Baro Coding, Dhiso Mustaqbalkaaga".',
      starterCode: '# Write here\n',
      solution: 'print("Baro Coding, Dhiso Mustaqbalkaaga")'
    },
    durationMin: 15
  }
];

export const QUIZZES: QuizQuestion[] = [
  {
    id: 'q1',
    courseId: 'html',
    questionSo: 'Waa maxay shaqada sumadda HTML ee <h1>?',
    questionEn: 'What is the purpose of the <h1> HTML tag?',
    optionsSo: [
      'In la sameeyo sawir (image)',
      'In la qoro cinwaan weyn (main heading)',
      'In la furo bog cusub oo internetka ah',
      'In la habeeyo midabada bogga'
    ],
    optionsEn: [
      'To insert an image',
      'To define a main heading',
      'To open a new web page',
      'To style page colors'
    ],
    correctIndex: 1,
    explanationSo: 'Sumadda <h1> waxaa loo adeegsadaa in lagu qoro cinwaanka ugu weyn ee bogga (Heading 1).',
    explanationEn: 'The <h1> tag is used to specify the primary heading of a web page.'
  },
  {
    id: 'q2',
    courseId: 'css',
    questionSo: 'Waa maxay luqadda loo isticmaalo in lagu qurxiyo laguna naqshadeeyo bogagga internetka?',
    questionEn: 'Which language is used to style and design web pages?',
    optionsSo: ['Python', 'HTML', 'CSS', 'SQL'],
    optionsEn: ['Python', 'HTML', 'CSS', 'SQL'],
    correctIndex: 2,
    explanationSo: 'CSS (Cascading Style Sheets) waxaa loo isticmaalaa in lagu qurxiyo oo lagu habeeyo muuqaalka bogagga.',
    explanationEn: 'CSS is specifically designed for styling and formatting web page presentation.'
  },
  {
    id: 'q3',
    courseId: 'js',
    questionSo: 'Sidee loo daabacaa fariin console-ka JavaScript?',
    questionEn: 'How do you print a message to the console in JavaScript?',
    optionsSo: [
      'print("Hello")',
      'console.log("Hello")',
      'echo("Hello")',
      'display("Hello")'
    ],
    optionsEn: [
      'print("Hello")',
      'console.log("Hello")',
      'echo("Hello")',
      'display("Hello")'
    ],
    correctIndex: 1,
    explanationSo: 'JavaScript waxay adeegsataa console.log() si loo daabaco xogta.',
    explanationEn: 'JavaScript uses console.log() to output debugging or log messages.'
  },
  {
    id: 'q4',
    courseId: 'python',
    questionSo: 'Waa maxay amarka Python ee lagu daabaco xogta shaashadda?',
    questionEn: 'What is the Python command to output data to the screen?',
    optionsSo: ['echo', 'print', 'printf', 'console.write'],
    optionsEn: ['echo', 'print', 'printf', 'console.write'],
    correctIndex: 1,
    explanationSo: 'Amarka print() waa amarka saxda ah ee lagu daabaco qoraalka Python.',
    explanationEn: 'The print() function is the built-in way to output data in Python.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    titleSo: 'Bogga Shakhsiga ah (Portfolio Website)',
    titleEn: 'Personal Portfolio Website',
    descSo: 'Dhis boggaaga shakhsiga ah si aad ugu bandhigto xirfadahaaga iyo mashaariicda aad soo qabatay.',
    descEn: 'Build your own personal portfolio website to showcase your skills and projects.',
    difficultySo: 'Bilow / Dhexe',
    difficultyEn: 'Beginner / Intermediate',
    skillsSo: ['HTML5', 'CSS3 Flexbox', 'Responsive Design'],
    skillsEn: ['HTML5', 'CSS3 Flexbox', 'Responsive Design'],
    stepsSo: [
      { stepNumber: 1, title: 'Qaab-dhismeedka HTML', detail: 'Abuur qaybaha madaxa (header), qeybta naftaada (about), iyo xiriirinta (contact).', codeSnippet: '<header>\n  <h1>Magacayga</h1>\n  <nav><a href="#about">Hordhac</a></nav>\n</header>' },
      { stepNumber: 2, title: 'Qurxinta CSS', detail: 'Ku dar midabyo casri ah, font qurux badan, iyo qaab qoys (Flexbox).', codeSnippet: 'body { background: #0b0f19; color: #fff; font-family: sans-serif; }' },
      { stepNumber: 3, title: 'Tijaabinta Mobile-ka', detail: 'Hubi in boggu si fiican uga dhex muuqdo teleefannada gacanta.' }
    ],
    stepsEn: [
      { stepNumber: 1, title: 'HTML Structure', detail: 'Create header, about section, and contact links.', codeSnippet: '<header>\n  <h1>My Name</h1>\n  <nav><a href="#about">About</a></nav>\n</header>' },
      { stepNumber: 2, title: 'CSS Styling', detail: 'Add modern color palette, clean typography, and Flexbox.', codeSnippet: 'body { background: #0b0f19; color: #fff; font-family: sans-serif; }' },
      { stepNumber: 3, title: 'Mobile Testing', detail: 'Verify responsive behavior on mobile viewports.' }
    ],
    starterHtml: '<div class="portfolio-card">\n  <h1>Maxamed Cali</h1>\n  <p>Horumariyaha Shabakadaha & Ardayga Coler-Code</p>\n  <button onclick="alert(\'Soo dhowow!\')">I Soo Xiriir</button>\n</div>',
    starterCss: 'body { background: #0b0f19; color: #00f0ff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; }\n.portfolio-card { background: #161e31; padding: 30px; border-radius: 16px; text-align: center; border: 1px solid #1f293d; }',
    starterJs: 'console.log("Portfolio loaded successfully!");'
  },
  {
    id: 'calculator',
    titleSo: 'Xisaabiye Casri ah (Calculator)',
    titleEn: 'Modern Calculator',
    descSo: 'Dhis xisaabiye xisaabin kara tirooyinka adoo adeegsanaya JavaScript iyo CSS Grid.',
    descEn: 'Build a functional calculator using JavaScript logic and CSS Grid.',
    difficultySo: 'Dhexe (Intermediate)',
    difficultyEn: 'Intermediate',
    skillsSo: ['JavaScript Functions', 'DOM Manipulation', 'CSS Grid'],
    skillsEn: ['JavaScript Functions', 'DOM Manipulation', 'CSS Grid'],
    stepsSo: [
      { stepNumber: 1, title: 'Naqshadeynta Screen-ka', detail: 'Abuur sanduuqa shaashadda iyo furayaasha nambarada.' },
      { stepNumber: 2, title: 'Ku Xirida JavaScript', detail: 'Qor hawlaha (functions) xisaabinaya isku darka, kala jarka, iyo dhufashada.' }
    ],
    stepsEn: [
      { stepNumber: 1, title: 'Grid Layout', detail: 'Design the display screen and button grid.' },
      { stepNumber: 2, title: 'JavaScript Logic', detail: 'Implement calculation functions for add, subtract, multiply.' }
    ],
    starterHtml: '<div class="calc">\n  <input type="text" id="display" readonly value="0">\n  <div class="keys">\n    <button onclick="appendNum(\'1\')">1</button>\n    <button onclick="appendNum(\'2\')">2</button>\n    <button onclick="appendNum(\'+\')">+</button>\n    <button onclick="calculate()">=</button>\n  </div>\n</div>',
    starterCss: '.calc { background: #111827; padding: 20px; border-radius: 12px; width: 250px; }\n#display { width: 100%; height: 40px; font-size: 20px; text-align: right; background: #0b0f19; color: #00f0ff; border: none; margin-bottom: 10px; }',
    starterJs: 'function appendNum(val) { document.getElementById("display").value += val; }\nfunction calculate() { let val = document.getElementById("display").value; document.getElementById("display").value = eval(val); }'
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'Cabdullahi Axmed',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    category: 'Su’aalo HTML / CSS',
    title: 'Sidee bay u shaqaysaa CSS Flexbox?',
    content: 'Walaalayaal, ma fahmi karo sida loo kala hakeeyo sanduuqyada anoo isticmaalaya Flexbox justify-content. Ma jiraa qof si fudud iigu sharxi kara?',
    createdAt: '2 saacadood ka hor',
    upvotes: 14,
    repliesCount: 2,
    replies: [
      {
        id: 'rep-1',
        authorName: 'Faysal Macalin',
        content: 'Walaal flexbox wuxuu u qaybiyaa curiyayaasha xariiq ama tiir. Isticmaal justify-content: space-between si aad u kala fogeyso!',
        createdAt: '1 saac ka hor'
      },
      {
        id: 'rep-2',
        authorName: 'Aamina Warsame',
        content: 'Waa su’aal fiican! Waxaad kaloo eegtaa casharka CSS Flexbox ee ku jira Coler-Code.',
        createdAt: '30 daqiiqo ka hor'
      }
    ]
  },
  {
    id: 'post-2',
    authorName: 'Maryan Yuusuf',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'Python & AI',
    title: 'Luqadee bay tahay inaan bilowgo: JavaScript mise Python?',
    content: 'Salaam, waxaan ahay qof cusub oo raba inuu barto coding-ka. Ma la talineysaan inaan ku billaabo Python mise JavaScript?',
    createdAt: 'Shalay',
    upvotes: 22,
    repliesCount: 1,
    replies: [
      {
        id: 'rep-3',
        authorName: 'Axmed Daahir',
        content: 'Haddii aad jeceshahay Web Development, ku billow HTML/CSS/JavaScript. Haddii aad jeceshahay AI iyo Data Science, Python ayaa ku habboon!',
        createdAt: 'Shalay'
      }
    ]
  }
];
