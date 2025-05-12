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
      A full-stack explorer crafting intuitive apps and resilient systems.
      
      Blending tech, math, and music to craft digital symphonies that make a difference.
    `,
  },
  experiencePage: [
    {
      sectionName: "Education",
      items: [
        {
          title: "Brown University",
          date: "2023-2027",
          location: "",
          content: `
          I spent`,
        },
        {
          title: "WLSA",
          date: "2020-2023",
          content: `F`,
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
