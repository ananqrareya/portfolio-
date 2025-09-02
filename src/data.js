import imge from "./assets/AnanQrareyLogo.png";
import invo from "./assets/LOGO-DIAGONAL-V3.png"
import GitHub from "./icons/github-svgrepo-com.svg";
import Linkedin from "./icons/linkedin-svgrepo-com.svg";
import Facebook from "./icons/facebook-color-svgrepo-com.svg";
import Instagram from "./icons/instagram-1-svgrepo-com.svg";
import Whatsapp from "./icons/whatsapp-svgrepo-com.svg";
import Gmail from "./icons/gmail-svgrepo-com.svg";
import Asal from "./icons/asaltech_logo.jpeg";
import knowledge from "./icons/1682942518229.jpeg";
import udemy from "./icons/image.png";
import HealthCareLogo from "./icons/WhatsApp Image 2025-04-06 at 20.37.09_5857562d.jpg";
import python from "./icons/python_5968350.png";
import spring from "./icons/spring.svg";
import react from "./icons/react.svg";
import counseolers from "./icons/counselors.png";
import mysql from "./icons/mysql.svg";
import postgres from "./icons/postgre_5968342.png";
import java from "./icons/java.svg";
import github from "./icons/github-svgrepo-com.svg";
import git from "./icons/git-svgrepo-com.svg";
import js from "./icons/js-svgrepo-com.svg";
import html from "./icons/html-5-svgrepo-com.svg";
import css from "./icons/css-3-svgrepo-com.svg";
import api from "./icons/api-svgrepo-com.svg";
 

export const heroData = {
  name: "Anan Qrareya",
  welcome: "👋 Welcome to my portfolio",
  title: "Hi, I'm",
subtitle:
  "A Full Stack Developer experienced in React.js, Node.js, FastAPI, PostgreSQL. I also expanded my backend knowledge with Spring Boot and Java through courses. I build modern, responsive web applications with clean and scalable code.",
  image: imge,
  available: true,
  socials: [
    // نفس الروابط من الـCV
    { name: "Github", icon: GitHub, url: "https://github.com/ananqrareya" },
    {
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anan-qrareya-31213a283/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100010930628618",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/alhajj_anan?igsh=NTh1cWxpZTVqOGh4&utm_source=qr",
    },
    // تصحيح رابط واتساب: استخدم تنسيق wa.me مع الرقم الدولي من الـCV
    { name: "Whatsapp", icon: Whatsapp, url: "https://wa.me/972597376520" },
    // الإيميل حسب الـCV (انتبه للنقطة)
    { name: "Gmail", icon: Gmail, url: "mailto:ananqrareya@gmail.com" },
  ],
};

export const aboutData = {
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1000&q=80",
  paragraphs: [
    "I'm Anan Qrareya, a Computer Engineering graduate from Palestine Technical University – Kadoorie. I’m a Full Stack Developer passionate about building modern, scalable, and user-friendly web applications.",
    "I started my professional journey with an internship at Asal Technologies, where I gained hands-on experience in backend development using Python (FastAPI) and PostgreSQL, learning how to design scalable APIs and collaborate in agile teams.",
    "After that, I joined Involink as a Junior Backend Developer, where I worked on production systems: building and optimizing backend services, real-time notification systems, and payment integrations using Node.js, Redis, and PostgreSQL. I also collaborated across teams using Agile and GitHub workflows to deliver high-quality features.",
    "Alongside my work, I expanded my skills in Spring Boot and Java through dedicated courses, gaining a solid understanding of REST APIs and backend security. My projects range from healthcare platforms to admin dashboards, reflecting my drive to turn complex challenges into functional solutions.",
  ],
};

export const experienceData = [
  {
    company: "Involink",
    position: "Junior Backend Developer",
    period: "Apr 2025 - Aug 2025",
    type: "Hybrid",
    description:
      "Developed and optimized backend services for a multi-tenant invoicing and payment platform. Implemented Redis caching to reduce response times, refactored legacy code, and improved system scalability. Built real-time notifications with Socket.IO, integrated external payment gateways (UWallet, bank APIs), and designed subscription & billing flows. Collaborated with frontend and DevOps teams to ensure smooth delivery using Agile and GitHub workflows.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Bull Queue",
      "Socket.IO",
      "Sequelize",
      "Git/GitHub",
    ],
    image: invo, // استبدلها بلوجو Involink إذا صار عندك
  },
  {
    company: "Asal Technologies",
    position: "Backend Development Intern",
    period: "Oct 2024 - Feb 2025",
    type: "Internship",
    description:
      "Built RESTful APIs using Python (FastAPI) and PostgreSQL, designed scalable components, and optimized queries while following GitHub workflows in an agile team.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Git", "GitHub"],
    image: Asal,
  },
  {
    company: "knowledge academy",
    position: "Frontend Development Course",
    period: "Mar 2024 - Aug 2024",
    type: "Online Course",
    description:
      "Completed a comprehensive frontend course covering HTML, CSS, JavaScript, and React.js. Built practical projects and developed strong interface-building skills.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    image: knowledge,
  },
  {
    company: "Udemy",
    position: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
    period: "Nov 2023 - Mar 2024",
    type: "Online Course",
    description:
      "Developed backend applications using Spring Boot, Spring, and Hibernate with RESTful APIs, focusing on JPA/data access and production-grade optimization.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate"],
    image: udemy,
  },
];

export const skillsData = [
  // Backend (Core Java first)
  {
    name: "Java",
    icon: java,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },
  {
    name: "Spring Boot",
    icon: spring,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },
  {
    name: "Node.js",
    icon: js,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },
  {
    name: "FastAPI",
    icon: python,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },
 

  // Frontend
  {
    name: "React.js",
    icon: react,
    type: "Frontend",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white",
  },
  {
    name: "JavaScript",
    icon: js,
    type: "Frontend",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white",
  },
  {
    name: "HTML",
    icon: html,
    type: "Frontend",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white",
  },
  {
    name: "CSS",
    icon: css,
    type: "Frontend",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: css,
    type: "Frontend",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white",
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: postgres,
    type: "Database",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white",
  },
  {
    name: "MySQL",
    icon: mysql,
    type: "Database",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white",
  },

  // APIs
  {
    name: "RESTful APIs",
    icon: api,
    type: "API",
    color: "bg-pink-100 text-pink-700 dark:bg-pink-700 dark:text-white",
  },

  // Tools
  {
    name: "Git",
    icon: git,
    type: "Tools",
    color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white",
  },
  {
    name: "GitHub",
    icon: github,
    type: "Tools",
    color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white",
  },
];


export const projectsData = [
  {
    title: "Healthcare Management System",
    description:
      "A digital platform connecting patients, doctors, labs, and pharmacies. Features: scheduling, medical records, real-time chat/video, and secure authentication with ID verification.",
    image: HealthCareLogo,
    github: "https://github.com/ananqrareya/HealthCare",
    demo: "https://vimeo.com/1072826387?share=copy",
  },
  {
    title: "Lawyer's Website (Counselors Office)",
    description:
      "Responsive legal office website (React + Tailwind) with client-editable content via front-end CMS components (editable text/images/links). Includes services, case studies, achievements, RTL support, and WhatsApp contact integration. Deployed live.",
    image: counseolers, 
    github: "#", 
    demo: "https://www.counselorsforlaw.com/",  
  },

  {
    title: "Role-Based CMS (Internship Project)",
    description:
      "A content management system with role-based access control developed during my internship at Asal Technologies. Built with FastAPI and PostgreSQL to handle secure user access and CRUD operations.",
    image: python,
    github:
      "https://github.com/ananqrareya/Role-Based-Content-Management-System-CMS-/tree/main/role_based_cmc",
    demo: "#",
  },
  {
    title: "Social Media API",
    description:
      "Backend for a social media platform using Spring Boot. Features: auth, profile, posts, comments, likes, and follow system with scalable RESTful design.",
    image: spring,
    github: "https://github.com/ananqrareya/SOCAILMEDIA-API-s",
    demo: "#",
  },
  {
    title: "More Projects on GitHub",
    description:
      "You can explore more of my open source and personal projects by visiting my GitHub profile.",
    image: github,
    github: "https://github.com/ananqrareya?tab=repositories",
    demo: "#",
  },
];
