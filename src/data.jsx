import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Masam",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Abbas",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Pakistani",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Gilgit - Pakistan",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+92-3466111944",
  },

  {
    id: 8,
    title: "Email : ",
    description: "Masamabbas040@gmail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "Masam-Abbas",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Urdu, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "7+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "8+",
    title: `Happy <br /> Customers`,
  },

  {
    id: 4,
    no: "3+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Sep-2022 - PRESENT",
    title: "Web Developer <span> 3Beez Tech </span>",
    desc: "I started working in 3beez from sep-2022 as a web developer. Here I polished my skills by working with the senior web developers.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb-2023 - PRESENT",
    title: "Web Developer <span> Sprinted Vision </span>",
    desc: "I worked as a developer in Sprinted Vision. It is a startup company so I handle minor projects like making any section of company website etc.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb-2022 - Sep-2022",
    title: "FrontEnd Developer <span> NAVTTC </span>",
    desc: "I started learning web development from NAVTYC Pakistan which is govt affiliated institute. They also provide the certificate.Here I designed and developed many basic forms and basic websites.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "BS in IT <span> KIU Gilgit </span>",
    desc: "I will complete my graduation Degree from Karakorram International University in 2024.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "Intermediate in CS <span> KIU Gilgit </span>",
    desc: "I completed my intermediate from Karakoram International University in 2019 with first division",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "Matriculation <span> Govt Boys High School Danyore </span>",
    desc: "I completed my matriculation with first division",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 3,
    title: "Css",
    percentage: "85",
  },

  {
    id: 4,
    title: "Php",
    percentage: "50",
  },

  {
    id: 5,
    title: "Bootstrap",
    percentage: "80",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "70",
  },

  {
    id: 7,
    title: "React",
    percentage: "65",
  },

  {
    id: 8,
    title: "Laravel",
    percentage: "60",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Web Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Github",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://profound-tarsier-13167c.netlify.app",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Web Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Github",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Masam-Abbas/Coffee-shop-wesbite",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Web Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Github",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Masam-Abbas/Book_store-website",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "University Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Github",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Masam-Abbas/Univerity-website-Template",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Portfolio website",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Github",
      },
      {
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        title: "Preview : ",
        desc: "https://portfolio-masam-a.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Company Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "3beez tech",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://3beeztechologies.netlify.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
