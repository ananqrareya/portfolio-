import imge from "./assets/AnanQrareyLogo.png";
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
    "A Full Stack Developer with experience in React.js, Spring Boot, FastAPI, and MySQL. I build modern, responsive web applications with clean and scalable code.",
  image: imge,
  available: true,
  socials: [
    {
      name: "Github",
      icon: GitHub,
      url: "https://github.com/ananqrareya",
    },
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
    {
      name: "Whatsapp",
      icon: Whatsapp,
      url: "http://Wa.me/+970597376520",
    },
    {
      name: "Gmail",
      icon: Gmail,
      url: "mailto:anan.qrareya@gmail.com",
    },
  ],
};

export const aboutData = {
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1000&q=80",
  paragraphs: [
    "I'm Anan Qrareya, a Computer Engineering graduate from Palestine Technical University – Kadoorie, based in Jenin, Palestine. I’m passionate about creating functional and efficient web applications that solve real-world problems.",
    "As a Full Stack Developer, I specialize in building modern web apps using React.js for the frontend and Spring Boot or FastAPI for the backend. I have experience working with MySQL and PostgreSQL databases, and I've developed several real-world projects like E-commerce platforms, admin dashboards, and a healthcare management system.",
  ],
};

export const experienceData = [
  {
    company: "Asal Technologies",
    position: "Backend Development Intern",
    period: "Oct 2024 - Feb 2025",
    type: "Internship",
    description:
      "Worked on backend services using Python and FastAPI, with PostgreSQL for data management. Learned to design scalable systems, collaborate using GitHub workflows, and meet strict project deadlines.",
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
      "Gained solid backend development skills in Spring Boot and Hibernate. Learned to build REST APIs, manage databases, and deploy scalable applications.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate"],
    image: udemy,
  },
];

export const skillsData = [
  // Backend Skills
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
    name: "FastAPI",
    icon: python,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },
  {
    name: "Python",
    icon: python,
    type: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white",
  },

  // Frontend Skills
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

  // Database Skills
  {
    name: "MySQL",
    icon: mysql,
    type: "Database",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white",
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    type: "Database",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-white",
  },

  // API Skills
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
      "A full-featured medical web platform for managing appointments, medical records, and real-time consultations. Built with React.js, Laravel, MySQL, and integrated with Stream.io, Pusher, and Vonage.",
    image: HealthCareLogo,
    github: "https://github.com/ananqrareya/HealthCare",
    demo: "https://vimeo.com/1072826387?share=copy",
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
      "A RESTful API for a social media platform developed using Spring Boot. Supports user authentication, profile management, post creation, comments, likes, and following system.",
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
