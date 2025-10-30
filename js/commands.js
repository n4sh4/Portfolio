// These are the variable for the direct links
var youtube = "https://www.youtube.com/@aryasaxx";
var twitter = "https://www.twitter.com/arya16z";
var linkedin = "https://www.linkedin.com/in/aryavardhan-singh";
var instagram = "https://www.instagram.com/r1zz3d";
var github = "https://github.com/arya16z";
var email = 'aryavas2004@gmail.com';
var resume = 'https://github.com/arya16z/Portfolio/blob/main/Aryavardhan_Singh_Resume.pdf';


// This content is about "WHOIS"
whois = [
  "<br>",
  "<strong>Introduction</strong>",
  "<br><br>",
  "I’m Aryavardhan Singh, an AI/ML Engineer with a focus on Deep Learning and Natural Language Processing.",
  "<br><br>",
  "<strong>Expertise and Skills:</strong>",
  "<br><br>",
  "Programming: Python, Java, R, Julia, C, C++, CUDA",
  "<br>",
  "Machine Learning: Scikit-Learn, XGBoost, TensorFlow, PyTorch",
  "<br>",
  "Deep Learning: CNNs, RNNs, Transformers, BERT, Transfer Learning",
  "<br>",
  "NLP: Text classification, Named Entity Recognition, Sentiment & Context Analysis",
  "<br>",
  "MLOps: Flask, Docker, Jenkins, REST APIs, GitHub Actions",
  "<br>",
  "Data Handling: Pandas, NumPy, SQL, MongoDB, Redis",
  "<br>",
  "Visualization & Design: Matplotlib, Seaborn, Figma",
  "<br>",
  "Research Areas: NLP, Model Optimization, Applied Deep Learning",
  "<br><br>",
  "<strong>Passion and Hobbies:</strong>",
  "<br><br>",
  "Outside AI, I dive into design philosophy, hardware architecture, and audio engineering — studying how hardware, human perception, and computation interact. When I’m not working on models, I’m usually experimenting with music tech, optimizing workflows, or dissecting how great designs achieve emotional impact through logic and detail.",
  "<br><br>",
  "<strong>Conclusion:</strong>",
  "<br><br>",
  "I’m building toward a career where engineering meets intelligence — developing systems that are efficient, interpretable, and impactful.",
  "<br>"
];


social = [
  "<br>",
  'youtube        <a href="' + youtube + '" target="_blank">youtube/aryasaxx' + "</a>",
  'twitter        <a href="' + twitter + '" target="_blank">twitter/arya16z' + '</a>',
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/aryavardhan-singh' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/r1zz3d' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/arya16z' + "</a>",
  "<br>"
];

projects = [
  "<br>",
  '1. MANDAP <a href="' ,
  '2. EmoAI <a href="',
  '3. CLI_Portfolio <a href="',
  "<br>"
];



game = [
  "<br>",
  '<span class="command">startGame</span> Have some maths game',
  "<br>"
];


secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

// Theme configurations
themes = {
  default: {
    name: "Default Terminal",
    background: "#222831",
    text: "#F6B17A",
    command: "#ED7D31",
    cursor: "#73ABAD"
  },
  light: {
    name: "Light Mode",
    background: "#f8f9fa",
    text: "#2c3e50",
    command: "#e74c3c",
    cursor: "#3498db"
  },
  cyberpunk: {
    name: "Cyberpunk",
    background: "#0a0a0a",
    text: "#00ff41",
    command: "#ff0080",
    cursor: "#00ffff"
  },
  matrix: {
    name: "Matrix",
    background: "#000000",
    text: "#00ff00",
    command: "#ff0000",
    cursor: "#00ffff"
  },
  retro: {
    name: "Retro Terminal",
    background: "#1a1a1a",
    text: "#00ff00",
    command: "#ffff00",
    cursor: "#ff00ff"
  },
  hacker: {
    name: "Hacker Mode",
    background: "#0d1117",
    text: "#00ff41",
    command: "#ff6b6b",
    cursor: "#00d4ff"
  }
};


// Animation speed settings
animationSpeed = {
  fast: 20,
  normal: 80,
  slow: 150,
  none: 0
};

// Skills matrix data
skillsMatrix = [
  "<br>",
  "<span class='command'>Security Skills Matrix:</span>",
  "<br>",
  "Python                               ██████████████ 98%",
  "Java                                 █████████████  94%", 
  "NumPy, Pandas                        ███████████    88%",
  "Scikit-Learn                         ███████████    90%",
  "PyTorch / TensorFlow                 █████████████  92%",
  "Matplotlib / Seaborn                 █████████████  95%",
  "Optimization, regularization         ████████       75%",
  "Reinforcement Learning, Fine-tuning  ████████████   90%",
  "MLOps                                ████████████   85%",
  "Flask / FastAPI                      ████████████   85%",
  "Docker                               ████████████   85%",
  "Git / GitHub                         ████████████   85%",
  "REST APIs                            ████████████   85%",
  "REST Databases (SQL/NoSQL)           ████████████   85%",
  "<br>"
];

// Experience timeline
experienceTimeline = [
  "<br>",
  "<span class='command'>Professional Journey:</span>",
  "<br>",
  "2022 - 2026       Computer Science Graduate",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">Commands</span>       Description',
  "<br>",
  '<span class="command">--- MAIN FEATURES ---</span>',
  '<br>',
  '<span class="command">whois</span>          About Me',
  '<span class="command">video</span>          My Youtube Channel',
  '<span class="command">social</span>         My Social platforms',
  '<span class="command">projects</span>       My Open Source Projects',
  '<span class="command">resume</span>         My Resume',
  '<span class="command">history</span>        Command history with search',
  '<span class="command">email</span>          My Email address',
  '<span class="command">clear</span>          Clear terminal',
  "<br>",
  '<span class="command">--- NEW FEATURES ---</span>',
  "<br>",
  '<span class="command">skills-matrix</span>  Interactive skills visualization',
  '<span class="command">experience</span>     Professional journey timeline',
  '<span class="command">set-theme</span>      Change terminal theme',
  '<span class="command">set-animation</span>  Control typing speed',
  '<span class="command">themes</span>         Available themes list',
  '<span class="command">settings</span>       Current settings',
  "<br>",
  '<span class="command">--- KEYBOARD SHORTCUTS ---</span>',
  "<br>",
  '<span class="command">Tab</span>            Auto-complete commands',
  '<span class="command">Ctrl+L</span>         Clear terminal',
  '<span class="command">Ctrl+H</span>         Show help',
  '<span class="command">Ctrl+T</span>         Toggle theme',
  "<br>",
];

banner = [
  "<br>",
  "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+",
  "|  A R Y A V A R D H A N   S I N G H  |",
  "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+",
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
  "<span class=\"color2\">NEW: Try</span> <span class=\"command\">'set-theme hacker'</span> <span class=\"color2\">or</span> <span class=\"command\">'skills-matrix'</span>",
  "<span class=\"color2\">Keyboard shortcuts:</span> <span class=\"command\">Ctrl+T</span> <span class=\"color2\">(themes),</span> <span class=\"command\">Tab</span> <span class=\"color2\">(autocomplete)</span>",
  "<span class=\"color2\">Note: Don't think about</span> <span class=\"command\">'SUDO'</span><span class=\"color2\">.</span>",
  "<span class=\"color2\">Risk hai toh ishq hai!</span>"
];
