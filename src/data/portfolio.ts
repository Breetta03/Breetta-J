// Edit this file to update the site. No component changes needed.

export const profile = {
  name: "Breetta J",
  wordmark: "BREETTA J",
  title: "Computer Science & Engineering Student",
  identity: ["AI/ML Enthusiast", "Data Analytics", "Web Developer"],
  headline: "Turning Ideas into Intelligent Solutions.",
  tagline: "Building ideas into intelligent solutions.",
  location: "Kovilpatti, Tamil Nadu, India",
  intro: [
    "I am a passionate Computer Science and Engineering student exploring the intersection of Artificial Intelligence, Machine Learning, Data Analytics, and Software Development.",
    "I enjoy building innovative technology solutions that solve real-world problems. From AI-powered applications to computer vision and intelligent web applications, I continuously explore emerging technologies and turn ideas into practical solutions.",
  ],
  about: [
    "I am Breetta J, a passionate Computer Science and Engineering student at Ramco Institute of Technology.",
    "I have a strong interest in Artificial Intelligence, Machine Learning, Data Analytics, and Web Development.",
    "I enjoy developing innovative applications, experimenting with emerging technologies, and solving real-world problems through technology.",
    "My experience includes building AI-powered examination evaluation systems, object detection applications, semantic image retrieval platforms, and web applications.",
    "I continuously explore new technologies, participate in technical competitions, and improve my problem-solving and development skills.",
  ],
  portrait: "/portrait.jpg", // drop your photo at public/portrait.jpg
  email: "breettaj13@gmail.com",
  phone: "+91 9345199635",
  linkedin: "https://linkedin.com/in/breetta03",
  github: "https://github.com/breetta03",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    school: "Ramco Institute of Technology, Rajapalayam",
    years: "2024–2028",
    scoreLabel: "CGPA",
    score: "7.97/10",
    status: "Currently Pursuing",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "",
    school: "St. Joseph Higher Secondary School, Kovilpatti",
    years: "2022–2024",
    scoreLabel: "Percentage",
    score: "87%",
    status: "",
  },
];

// icon keys map to Lucide icons in Skills.tsx
export const skills = [
  { category: "Programming Languages", icon: "code", items: ["Python", "Java", "C", "SQL", "JavaScript"] },
  { category: "AI & Machine Learning", icon: "brain", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "CNN", "Object Detection"] },
  { category: "Data Science", icon: "chart", items: ["Pandas", "NumPy", "Data Preprocessing", "Exploratory Data Analysis", "Data Visualization"] },
  { category: "Databases", icon: "database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "Web Development", icon: "globe", items: ["Flask", "HTML", "CSS", "React Basics"] },
  { category: "Tools and Platforms", icon: "wrench", items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "Streamlit"] },
  { category: "Core Computer Science", icon: "cpu", items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"] },
];

export interface Project {
  number: string;
  name: string;
  subtitle?: string;
  duration: string;
  description: string;
  features: string[];
  tech: string[];
  image?: string; // optional screenshot path, e.g. "/projects/examify.png"
  github?: string; // add only real URLs
  demo?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Examify",
    subtitle: "AI-Powered Automated Answer Evaluation Platform",
    duration: "February 2026 – May 2026", // TODO: verify dates before publishing
    description: "Developed an AI-powered examination evaluation platform using Streamlit and Generative AI to simplify the examination and assessment process.",
    features: ["Automated question paper generation", "AI-powered answer evaluation", "Student ranking system", "Personalized feedback", "Performance reports"],
    tech: ["Streamlit", "Generative AI"],
  },
  {
    number: "02",
    name: "AI-Powered Object Detection & Similarity Search",
    duration: "May 2026 – July 2026",
    description: "Developed an intelligent computer vision and semantic image retrieval system integrating Gemini and OpenCV.",
    features: ["AI-powered object detection", "Semantic image search", "Gemini embedding generation", "PostgreSQL with pgvector", "Cosine similarity-based image retrieval", "Duplicate-free image retrieval"],
    tech: ["Python", "Gemini", "OpenCV", "PostgreSQL", "pgvector"],
  },
  {
    number: "03",
    name: "IndiaFresh AI",
    subtitle: "Fruit & Vegetable Object Detection System",
    duration: "September 2026",
    description: "Developed a custom CNN-based object detection model trained from scratch using a curated dataset.",
    features: ["Detection of eight fruit and vegetable classes", "Bounding box visualization", "Confidence score generation", "Custom-trained CNN model"],
    tech: ["Python", "CNN", "Computer Vision"],
  },
  {
    number: "04",
    name: "Internship Application Portal",
    duration: "January 2025",
    description: "Developed an internship application management portal with authentication and application tracking functionality.",
    features: ["User authentication", "Internship listings", "Resume uploads", "Application tracking"],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
  },
];

export interface AchievementItem {
  id: string;
  number: string;
  event: string;
  title: string;
  recognition: string;
  highlight: string;
  description: string;
  isPrimary?: boolean;
}

export const achievements: AchievementItem[] = [
  {
    id: "gsc-2026",
    number: "01",
    event: "GOOGLE SOLUTION CHALLENGE 2026",
    title: "Google Solution Challenge 2026",
    recognition: "FINALIST",
    highlight: "FINALIST",
    description: "Developed an AI-powered Task Manager, demonstrating innovative problem-solving and the application of technology to real-world challenges.",
    isPrimary: true,
  },
  {
    id: "web-design-battle",
    number: "02",
    event: "WEB DESIGN BATTLE",
    title: "Web Design Battle",
    recognition: "1ST RUNNER-UP",
    highlight: "1ST RUNNER-UP",
    description: "Designed and developed a responsive web solution, showcasing creativity, user experience design, and frontend development skills.",
    isPrimary: true,
  },
  {
    id: "ragura-hackathon",
    number: "03",
    event: "RAGURA HACKATHON",
    title: "Ragura Hackathon",
    recognition: "2ND RUNNER-UP",
    highlight: "2ND RUNNER-UP",
    description: "Built a Retrieval-Augmented Generation (RAG) project, exploring intelligent information retrieval and AI-driven solutions.",
    isPrimary: true,
  },
  {
    id: "learnlike-hackathon",
    number: "04",
    event: "LEARNLIKE FULL STACK + AI HACKATHON",
    title: "Learnlike Full Stack + AI Hackathon",
    recognition: "INTERNSHIP OFFER & SWAGS",
    highlight: "Internship Offer",
    description: "Earned an internship offer and official recognitions by constructing high-performance generative AI pipelines in a national-level hackathon.",
    isPrimary: false,
  },
  {
    id: "tcs-codevita",
    number: "05",
    event: "TCS CODEVITA SEASON 13",
    title: "TCS CodeVita Season 13",
    recognition: "GLOBAL RANK 9,725",
    highlight: "Rank 9,725",
    description: "Competed internationally against top collegiate engineering talent solving complex algorithmic and data structure problems.",
    isPrimary: false,
  },
];

export const experience = [
  {
    role: "AI/ML Intern",
    company: "DigisAIlor",
    location: "Tuticorin",
    duration: "June 2026",
    points: [
      "Developed an AI-powered object detection and image similarity search system.",
      "Integrated Gemini and OpenCV.",
      "Used PostgreSQL pgvector to store embeddings.",
      "Implemented cosine similarity for image retrieval.",
    ],
    tech: ["Gemini", "OpenCV", "PostgreSQL", "pgvector"],
  },
  {
    role: "Web Development Intern",
    company: "Ramausys Technologies",
    location: "Kovilpatti",
    duration: "January 2025",
    points: [
      "Developed an Internship Application Portal.",
      "Implemented user authentication and internship listings.",
      "Built resume upload and application tracking functionality.",
      "Worked with Python, Flask, SQLite, HTML, CSS, and JavaScript.",
    ],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
  },
];
