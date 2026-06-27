const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Highlights",
    link: "#testimonials",
  },
  {
    name: "Beyond Code",
    link: "#beyond-code",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Modern", imgPath: "/images/ideas.svg" },
  { text: "Intelligent", imgPath: "/images/concepts.svg" },
  { text: "Scalable", imgPath: "/images/designs.svg" },
  { text: "Modern", imgPath: "/images/ideas.svg" },
  { text: "Intelligent", imgPath: "/images/concepts.svg" },
  { text: "Scalable", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Open-Source Contributions " },
  { value: 3, suffix: "+", label: "Programs & Hackathons" },
  { value: 9.3, suffix: "/10", label: "CGPA" },
];

const logoIconsList = [
  {
    name: "Java",
    imgPath: "/images/logos/javalogo.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascriptlogo.png",
  },
  {
    name: "CSS",
    imgPath: "/images/logos/csslogo.png",
  },
  {
    name: "Supabase",
    imgPath: "/images/logos/supabaselogo.png",
  },
  {
    name: "Vercel",
    imgPath: "/images/logos/vercellogo.png",
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/expressjslogo.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/nodejslogo.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sqllogo.png",
  },
];

const abilities = [
  
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Communicating clearly, collaborating effectively, and keeping work organized throughout a project.",
  },
  {
    imgPath: "/images/time.png",
    title: "Quality Focus",
    desc: "Building clean, reliable work with attention to detail, usability, and continuous improvement.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Problem Solver",
    desc: "Breaking down challenges into structured, practical solutions through thoughtful development.",
  },
];

const techStackImgs = [
  {
    name: "React & Next.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python & Machine Learning",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js & APIs",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "SQL & Databases",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "GitHub",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [

  {
  name: "Java",
  modelPath: "/images/logos/javalogo.png",
  scale: 1,
  rotation: [0, 0, 0],
 },
  {
    name: "React & Next.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & Machine Learning",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js & APIs",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "SQL & Databases",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];



const projectCards = [
  {
    title: "Finance Tracker Website",
    tech: "Next.js, React, Prisma, Supabase, Tailwind CSS, Gemini AI",
    date: "April 2025 - June 2025",
    imgPath: "/images/coincapita.png",
    logoPath: "/images/logos/coincapitalogo.png",
    features: [
      "Built an AI-powered personal finance tracker for managing accounts, transactions, budgets, and spending insights.",
      "Added authentication, database-backed finance records, multi-currency support, and budget-progress tracking.",
      "Integrated AI-generated financial insights and automated workflows for budget alerts and recurring transactions.",
    ],
  },
  {
    title: "Agentic App Builder",
    tech: "React, Next.js, Node.js, AI APIs, Tailwind CSS",
    date: "September 2025",
    imgPath: "/images/aiapp.png",
    logoPath: "/images/logos/AgenticAppLogo.png",
    features: [
      "Built an AI-powered platform that helps users turn ideas into structured application plans.",
      "Designed workflows for generating features, project structure, and development guidance.",
      "Focused on creating a clear and beginner-friendly interface for building with AI.",
    ],
  },
  {
    title: "Price Tracker Platform",
    tech: "React, JavaScript, Node.js, APIs, Tailwind CSS",
    date: "November 2025",
    imgPath: "/images/pricetrack.png",
    logoPath: "/images/logos/price-trackerLogo.png",
    features: [
      "Built a platform for tracking product prices and comparing changes over time.",
      "Designed product-search and price-monitoring workflows using external data APIs.",
      "Created a responsive interface for viewing products, prices, and tracking details.",
    ],
  },
  {
    title: "Task Manager",
    tech: "MongoDB, Express.js, React, Node.js, Tailwind CSS",
    date: "December 2025",
    imgPath: "/images/taskmanager.png",
    logoPath: "/images/logos/task-managerLogo.png",
    features: [
      "Built a full-stack task management application using the MERN stack.",
      "Created task creation, editing, deletion, and progress-tracking workflows.",
      "Designed a responsive interface for organizing daily work and priorities.",
    ],
  },
  {
    title: "AI Recipe Platform",
    tech: "React, Next.js, AI APIs, JavaScript, Tailwind CSS",
    date: "February 2026",
    imgPath: "/images/aireceipe.png",
    logoPath: "/images/logos/ai-receipeLogo.png",
    features: [
      "Built an AI-powered recipe platform for generating meal ideas from user preferences and ingredients.",
      "Designed recipe discovery, ingredient-based suggestions, and easy-to-read recipe views.",
      "Focused on a clean interface that makes cooking inspiration quick and accessible.",
    ],
  },
  {
    title: "Breast Cancer Prediction Using ML",
    tech: "Python, Machine Learning, Scikit-learn, Pandas, NumPy",
    date: "October 2024 - December 2024",
    imgPath: "/images/breastcancerPred.png",
    logoPath: "/images/logos/BreastcancerPredictionLogo.png",
    features: [
      "Built a machine-learning model to predict breast cancer outcomes from medical diagnostic data.",
      "Prepared data, trained classification models, and evaluated prediction performance.",
      "Explored practical machine-learning workflows including preprocessing, training, and evaluation.",
    ],
  },
];


const expCards = [
  {
    //review:
     // "Worked as a Data Analyst Intern at Bluestock, contributing to data-focused tasks and strengthening practical analytics, research, and problem-solving skills.",
    imgPath: "/images/bluestockExp1.png",
    logoPath: "/images/logos/BluestockLogo.png",
    title: "Data Analyst Intern",
    date: "June 2026 - Present",
    responsibilities: [
      "Performed data cleaning, preprocessing, and exploratory data analysis on real-world financial datasets.",
      "Built interactive Power BI dashboards to visualize investment trends and key business metrics.",
      "Utilized Python, Pandas, and NumPy for data transformation, feature engineering, and analytical workflows.",
      "Collaborated on research-driven projects to generate insights supporting business and reporting requirements.",
      "Applied analytical thinking and data-driven approaches to solve practical business problems."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const currentlyLearning = [
  "Data Structures & Algorithms",
  "System Design Fundamentals",
  "AI Fundamentals & Intelligent Agents",
];

const testimonials = [
  {
    name: "Amazon ML Summer School",
    mentions: "Selected Participant • 2025",
    review:
      "Selected for Amazon ML Summer School, where I explored core machine learning concepts through industry-led sessions and hands-on learning.",
    imgPath: "/images/logos/amazonlogo.png",
  },
  {
    name: "GirlScript Summer of Code & Summer of Bitcoin",
    mentions: "Open Source Contributor • 2025",
    review:
      "Contributed to open-source projects, collaborating with developers and gaining practical experience with Git, GitHub, and real-world software development workflows.",
    logos: [
    "/images/logos/girlslogo.png",
    "/images/logos/soblogo.png",
  ],
  },
  {
    name: "Next Genius Scholarship",
    mentions: "Scholarship Recipient • 2022",
    review:
      "Awarded the Next Genius Scholarship in recognition of academic excellence, leadership potential, and global learning opportunities to study in USA.",
    imgPath: "/images/logos/nextgenuislogo.png",
  },
];


const beyondCode = [
  {
  title: "Travel & Trekking",
  desc: "The mountains have always felt like home to me. From the sacred valleys of Kedarnath and Yamunotri to the breathtaking landscapes of Uttarakhand, Darjeeling, Nepal, and Jammu, every journey has taught me resilience, curiosity, and the joy of stepping beyond my comfort zone while connecting with incredible people along the way.",
  icon: "🏔️",
  imgPath: "/images/beyond/travel.png",
},
{
  title: "Studio Ghibli",
  desc: "There's something magical about Studio Ghibli that I never seem to outgrow. The peaceful worlds, heartfelt stories, and beautiful attention to detail remind me to slow down, appreciate the little things, and never lose my sense of wonder.",
  icon: "🌿",
  imgPath: "/images/beyond/ghibli.png",
},
{
  title: "Music & Singing",
  desc: "Music has always been a big part of who I am. I've performed at college events and competitions, and winning First Prize last year is a memory I'll always cherish. Beyond performing, I love taking long walks with my headphones on, listening to my favorite music or an audiobook, it's my favorite way to unwind, reflect, and find inspiration.",
  icon: "🎤",
  imgPath: "/images/beyond/music.png",
},
{
  title: "Art & Creativity",
  desc: "I've always loved creating things, whether it's designing interfaces, experimenting with digital art, or simply bringing ideas to life. Creativity makes every project feel personal, and I enjoy finding the balance between functionality and beautiful design.",
  icon: "🎨",
  imgPath: "/images/beyond/art.png",
},
{
  title: "Badminton",
  desc: "Badminton is my favorite way to switch off from a busy day. The simple joy of playing with friends. It's one of those hobbies that always leaves me feeling refreshed and ready to take on the next challenge.",
  icon: "🏸",
  imgPath: "/images/beyond/badminton.png",
},
];


const socialImgs = [
  {
    name: "github",
    link: "https://github.com/EishitaParik",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/eishita-parik-298040239/ ",
    imgPath: "/images/linkedln.png",
  },
  {
    name: "mail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=parikeishita@gmail.com&su=Portfolio%20Inquiry",
    imgPath: "/images/email.png",
  },
  {
    name: "Resume",
    link: "https://www.image2url.com/r2/default/documents/1782505613401-17d4384f-8eb5-49d3-8c1f-ea7030f636cc.pdf",
    imgPath: "/images/resume.png",
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  projectCards,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  beyondCode,
  currentlyLearning,
  techStackIcons,
  techStackImgs,
  navLinks,
};