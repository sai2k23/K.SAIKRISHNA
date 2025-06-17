import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb, 
  express,
  Bootstrap,
  Postman,
  github,
  MySQL,
  LetsGrowMore,
  OasisInfoByte,
  NullClass,
  SRMS, 
  InternArea,
  TubeConnect,
  AsthmaPrediction,
  BlogPlatform,
  ExcelAnalytics,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
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
    name: "SQL",
    icon: MySQL,
  },
  {
    name: "Git Hub",
    icon: github,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Postman",
    icon: Postman,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Let's GrowMore",
    icon: LetsGrowMore,
    iconBg: "#383E56",
    date: " Nov 2023 - Dec 2023",
    points: [
      "• My first internship at Let’s Grow More, where I spent 30 days focused on front-end development.",
      "This experience allowed me to enhance my skills in HTML, CSS, and JavaScript, essential tools for creating engaging web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I successfully completed various tasks and gained hands-on experience by providing constructive feedback to fellow developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Oasis InfoByte",
    icon: OasisInfoByte,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developed a responsive landing page for Starbucks, created a personal portfolio, and built a temperature converter using HTML, CSS, and JavaScript, enhancing user experience and interactivity.",
      "Gained hands-on experience with frameworks.",
      "Earned a Letter of Recommendation (LOR).",
    ],
  },
  {
    title: "Web Developer(MERN Stack)",
    companyName: "NullClass",
    icon: NullClass,
    iconBg: "#383E56",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Completed a MERN stack project from scratch to deployment.",
      "Learned front-end technologies including HTML, CSS, and React.js.",
      "Utilized MongoDB for database management and Firebase for user authentication.",
      "Enhanced user experience through CSS improvements, notification system development, and payment integration.",
    ],
  },
//  {
  //  title: "Full stack Developer",
   // companyName: "Meta",
    //icon: meta,
    //iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    //points: [
      //"Developing and maintaining web applications using React.js and other related technologies.",
      //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      //"Participating in code reviews and providing constructive feedback to other developers.",
    //],
  //},
];

//const testimonials: TTestimonial[] = [
 // {
  // // testimonial:
  //    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //  name: "Sara Lee",
  //  designation: "CFO",
  //  company: "Acme Co",
  //  image: "https://randomuser.me/api/portraits/women/4.jpg",
//  },
 // {
   // testimonial:
   //   "I've never met a web developer who truly cares about their clients' success like Rick does.",
   // name: "Chris Brown",
    //designation: "COO",
    //company: "DEF Corp",
   // image: "https://randomuser.me/api/portraits/men/5.jpg",
 // },
  //{
 //   testimonial:
 //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
 //   name: "Lisa Wang",
  //  designation: "CTO",
 //   company: "456 Enterprises",
  //  image: "https://randomuser.me/api/portraits/women/6.jpg",
  //},
//];

const projects: TProject[] = [
  {
    name: "SRMS",
    description:
      "The Student Result Management System efficiently manages academic results. It features a user-friendly interface for secure data input and tracking. Students can access their results in real-time. This system enhances the overall experience for both administrators and students.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: SRMS,
    sourceCodeLink: "https://github.com/sai2k23/SRMS",
  },
  {
    name: "Intern Area",
    description:
      "The Internshala Clone (Intern Area) is a MERN stack project featuring secure user authentication, internship listings, and hiring/rejection notifications via the Notification API. It includes responsive design and a premium resume creation feature stored in user profiles.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "FSD",
        color: "green-text-gradient",
      },
      {
        name: "NullClass",
        color: "pink-text-gradient",
      },
    ],
    image: InternArea,
    sourceCodeLink: "https://github.com/sai2k23/Internarea",
    liveDemoLink: "https://internshipsarea.netlify.app",

  },
  {
    name: "Tube-Connect",
    description:
      "Tube-Connect is a next-gen video-sharing platform that lets users seamlessly share full videos and shorts directly with friends, just like social media. With a sleek interface and real-time sharing. Tube-Connect ensures every share feels instant, interactive, and engaging. 🎥✨.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Video Sharing",
        color: "green-text-gradient",
      },
    //  {
      //  name: "Socket.IO",
        //color: "pink-text-gradient",
      //},//
      //{
        //name: "WebRTC",
        //color: "purple-text-gradient",
      //},
    ],
    image:  TubeConnect,
    sourceCodeLink: "https://github.com/sai2k23/Tube-Connect",
    liveDemoLink: "https://tube-connnect.netlify.app",

  },
  {
    name: "Asthma-Severity-Prediction",
    description:
      "The project predicts asthma severity using machine learning models, providing valuable insights for healthcare professionals and patients.",
    tags: [
      {
        name: "MERN Stack",
        color: "purple-text-gradient",
      },
      {
        name: "FSD",
        color: "green-text-gradient",
      },
      {
        name: "Zidio",
      color: "pink-text-gradient",
      },
    ],
    image: AsthmaPrediction,
    sourceCodeLink: "https://github.com/sai2k23/Asthma-Prediction",
    liveDemoLink: "https://asthmaseverityprediction.netlify.app",

  },
   {
    name: "NoteHarbor(Blog Platform)",
    description:
      "The project enables users to write, publish, and manage blogs with Google and email authentication, providing a personalized and secure content platform for writers and readers.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "FSD",
        color: "green-text-gradient",
      },
      {
        name: "NullClass",
        color: "pink-text-gradient",
      },
    ],
    image: BlogPlatform,
    sourceCodeLink: "https://github.com/sai2k23/Blogging-Platform",
    liveDemoLink: "https://noteharborplatform.netlify.app",

  },
 {
    name: "Excel Analytics",
    description:
      "The project transforms Excel data into dynamic visual insights using charts and AI-powered summaries, empowering users to analyze, filter, and interpret data effectively in real time.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
         color: "purple-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ExcelAnalytics,
    sourceCodeLink: "https://github.com/sai2k23/Excel-Analytics",
    liveDemoLink: "https://visualexcel.netlify.app",

  },
];

export { services, technologies, experiences, projects };
