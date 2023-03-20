import {
  freelance,
  attractantLogo,
  kartonah,
  neu,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  // Projects
  realestate,
  abaad,
  alwadi,
  attractant,
  ecollection,
  evimki,
  imergo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "ps",
  //   icon: ps,
  // },
  // {
  //   name: "ai",
  //   icon: ai,
  // },
];

const experiences = [
  {
    title: "Web Developer & Graphic Designer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#3eb2fe",
    date: "Jan 2018 - Present",
    points: [
      "Design new brand identities and social media",
      "Create Native & CMS Websites",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Management of existing websites",
    ],
  },
  {
    title: "Web-Developer",
    company_name:
      "Attractant: Marketing solutions, graphic design and web development company",
    icon: attractantLogo,
    iconBg: "black",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using native, Wordpress and other related technologies.",
      "Technical support for existing websites",
      "Design new features for existing websites.",
      "Manage servers, hosting and domains",
    ],
  },
  {
    title: "UI/UX & Graphic Designer",
    company_name:
      "Kartonah: is one of the B2B marketplaces that has millions of potential Wholesalers, buyers and sellers united under one hood.",
    icon: kartonah,
    iconBg: "white",
    date: "Mai 2020 - Dec 2020",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Creation of wireframes and design of the user",
      "Engaged with development & design teams",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT-specialist",
    company_name: "Near East University | IT Department",
    icon: neu,
    iconBg: "white",
    date: "Aug 2018 - Jan 2019",
    points: [
      "Technical support and IT manager assistance.",
      "Configuration and maintenance of both hardware and software",
      "Monitoring of main servers and other network devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Realestate MERN-stack",
    description:
      "This MERN stack real estate application, uses AuthO for login, it has the search functionality to look for properties listed for sale, and visually displays the search results on a map on one side and properties listed on the other side, it also allows the user to add properties to their favorites list. The application provides the agent with user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/hamzaxezzat/FullStack-MERN-CRUD",
  },
  {
    name: "Alwadi",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: alwadi,
    source_code_link: "https://github.com/hamzaxezzat/Alwadi-Investment",
  },
  {
    name: "Evimki",
    description:
      "An e-commerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer. It doesn't matter if your business is large or small, B2B or B2C, selling tangible goods or providing remote services.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: evimki,
    source_code_link: "http://evimki.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
