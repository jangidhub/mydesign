/**
 * Site content.
 * Synchronized with Sudhanshu Jangid's official Resume.
 */

const SITE = {
  name: "Sudhanshu Jangid",
  role: "Python Developer Intern | React Native Mobile Developer Intern",
  location: "Jodhpur, Rajasthan, India",
  email: "sudhanshujagnid143@gmail.com",
  phone: "+91 7597068482",
  github: "https://github.com/jangidhub/",
  linkedin: "https://www.linkedin.com/in/sudhanshu-jangid03",
  twitter: "https://x.com/Sudhans0841",
  portfolio: "https://jangidhub.github.io/mydesign/resume/",
  resumeUrl: "resume.pdf",
};

const PROJECTS = [
  {
    name: "MotionCTRL — Hand Gesture PC Controller",
    status: "Completed",
    description:
      "A computer-vision application for controlling PC interactions and mouse movements touchlessly using natural hand gestures captured through a standard laptop webcam.",
    features: [
      "Real-time hand landmark detection using MediaPipe",
      "OpenCV for camera feed capture and image processing",
      "Gesture-based mouse control and interaction logic",
      "One Euro Filter for reducing cursor jitter and improving responsiveness",
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    role: "Developer",
    github: "https://github.com/jangidhub/HGC/",
    demo: null,
    pattern: "dots",
  },
  {
    name: "Task / Todo List Mobile App",
    status: "Completed",
    description:
      "A cross-platform mobile task-management application built using React Native and Expo to help users organize daily workflows and track productivity.",
    features: [
      "Task creation and task completion functionality",
      "Interactive marking and status toggling for tasks",
      "Intuitive, clean interface designed for daily task tracking",
      "Mobile state management and responsive UI layout",
    ],
    tech: ["React Native", "Expo", "JavaScript"],
    role: "Mobile Developer",
    github: "https://github.com/jangidhub/genie-tasks",
    demo: null,
    pattern: "lines",
  },
  {
    name: "Personal Portfolio Website",
    status: "Live",
    description:
      "Designed and developed a personal portfolio website to showcase technical projects, computer vision demos, and development skills.",
    features: [
      "Responsive web pages built with modern HTML, CSS, and JavaScript",
      "Interactive Three.js hero scene and custom cursor interactions",
      "Version control using Git and GitHub repository management",
      "Automated continuous deployment via GitHub Pages",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"],
    role: "Frontend Developer",
    github: "https://github.com/jangidhub/mydesign",
    demo: "https://jangidhub.github.io/mydesign/resume/",
    pattern: "grid",
  },
  {
    name: "Inspection Management System",
    status: "In Development",
    description:
      "A web application built to digitize inspection workflows, manage records, and eliminate paper-based processes for businesses.",
    features: [
      "User authentication and structured inspection forms",
      "Database-driven record tracking and validation",
      "Report generation and responsive web interface",
    ],
    tech: ["Python", "Django (Basic)", "PostgreSQL (Basic)", "JavaScript"],
    role: "Full-Stack Developer",
    github: null,
    demo: null,
    pattern: "waves",
  },
];

const CURRENTLY_BUILDING = {
  name: "Tap-to-Connect NFC Platform",
  status: "MVP / In Development",
  description:
    "An NFC-enabled digital identity platform connecting physical NFC cards with dynamic digital profiles for professionals and businesses.",
  tech: ["Django", "Python", "NFC", "Web"],
};

const CAPABILITIES = [
  {
    title: "Python & Backend Development",
    description: "Hands-on experience with Python programming, OpenCV/MediaPipe automation, basic Django web apps, REST API fundamentals, and PostgreSQL.",
  },
  {
    title: "React Native Mobile Development",
    description: "Building functional, interactive cross-platform mobile applications using React Native, Expo, and modern JavaScript.",
  },
  {
    title: "Computer Vision & Touchless HCI",
    description: "Developing webcam-driven hand-tracking systems, MediaPipe deep-learning pipelines, OpenCV image processing, and low-latency cursor dispatch.",
  },
  {
    title: "Web Technologies & Deployment",
    description: "Crafting clean, responsive web applications using HTML, CSS, JavaScript, with Git/GitHub version control and GitHub Pages deployment.",
  },
];

const SKILLS = [
  {
    group: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript (Basic)", "SQL", "Java (Basic)", "C (Basic)", "C++ (Basic)"],
  },
  {
    group: "Backend & Database",
    items: ["Django (Basic)", "PostgreSQL (Basic)", "REST API Fundamentals"],
  },
  {
    group: "Libraries & Frameworks",
    items: ["OpenCV", "MediaPipe", "PyAutoGUI", "React Native", "Expo", "React (Basic)"],
  },
  {
    group: "Web Development",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Linux", "GitHub Pages"],
  },
  {
    group: "Computer Science & Strengths",
    items: ["Object-Oriented Programming", "Basic Data Structures & Algorithms", "Problem Solving", "Debugging & Troubleshooting", "Team Collaboration"],
  },
];

const EDUCATION = [
  {
    period: "2023 – 2026",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Jai Narain Vyas University, Jodhpur",
    description: "CGPA: 6.98 / 10 · Coursework: Python Programming, Database Management Systems, Operating Systems, Computer Networks, Data Science, Cyber Security, Internet of Things.",
  },
];

const EXPERIENCE = [
  {
    period: "Available for Internships",
    title: "Python & React Native Developer",
    org: "Independent Projects",
    description:
      "Built practical software spanning computer vision gesture controllers, React Native mobile apps, and database-driven web tools. Seeking an internship to apply programming and problem-solving skills while gaining production software experience.",
  },
];
