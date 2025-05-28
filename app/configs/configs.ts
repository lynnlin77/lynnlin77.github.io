import { Configs } from "~/types/configTypes";

const configs: Configs = {
  name: "Qien (Lynn) Lin",
  homePagePictureFileName: "avatar.png",
  pages: ["about", "experience", "skills", "projects", "footprints"],
  colors: {
    primary: "#f7e1d7",
    background: "#edafb8",
  },
  navBar: {
    socialMediaLinks: {
      email: "qien_lin@brown.edu",
      facebook: "",
      x: "",
      github: "https://github.com/lynnlin77",
      instagram: "https://www.instagram.com/lynnlin_77",
      linkedin: "https://www.linkedin.com/in/lynn-qien-lin/",
    },
  },
  aboutPage: {
    greeting: "Hey, this is Lynn!",
    content: `
  💻 Full-stack explorer  🐻 Brown University student,  
powered by clean code, curiosity, and a touch of care 🌱✨  
  
🌍 Combining tech, math, and music, to solve world's challenges — and create with<WordCycle />.
  `
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "Brown University",
          date: "Sep 2023 - May 2027 (expected)",
          degree: "Sc.B. Applied Math and Computer Science, 4.0/4.0",
          location: "Providence, RI",
          content: `Relevant Courses: Introduction to Computer Systems, Introduction to Object-Oriented Programming, Program Design with Data Structures and Algorithms, Foundation of AI, Deep Learning, Cybersecurity and International Relations`,
        },
      ],
    },
    {
      sectionName: "Work",
      items: [
        {
          title: "D",
          date: "2024-Present",
          content: `
          
          `,
        },
      ],
    },
  ],
  skillsPage: [
    {
      name: "React",
      iconFileName: "react.svg",
    },
    {
      name: "Remix",
      iconFileName: "remix.svg",
    },
    {
      name: "TypeScript",
      iconFileName: "typescript.svg",
    },
    {
      name: "SQL",
      iconFileName: "sql.png",
    },
    {
      name: "Node",
      iconFileName: "node.png",
    },
    {
      name: "C++",
    },
    {
      name: "Python",
    },
    {
      name: "GraphQL",
    },
    {
      name: "Docker",
    },
    {
      name: "Kubernetes",
    },
  ],
  projectsPage: [
    {
      title: "M",
      description:
        "I led ",
      link: "",
      pictureFileName: "",
      skills: "M",
    },
    {
      title: "T",
      description:
        "I worked .",
      skills: "Co",
    },
    {
      title: "D",
      description:
        "I helped",
    },
  ],
};

export default configs;