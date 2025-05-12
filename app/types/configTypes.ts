type ContactOptions =
  | "email"
  | "linkedin"
  | "facebook"
  | "x"
  | "github"
  | "instagram"
  | "linkedin";

type PageOptions =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "footprints";

export interface Configs {
  name: string;
  homePagePictureFileName: string;
  pages: PageOptions[];
  colors: {
    primary: string;
    background: string;
  };
  navBar: {
    socialMediaLinks: Record<ContactOptions, string>;
  };
  aboutPage: {
    greeting: string;
    content: string;
  };
  experiencePage?: {
    sectionName: string;
    items: {
      title: string;
      date?: string;
      location?: string;
      content: string;
    }[];
  }[];
  skillsPage?: {
    iconFileName?: string;
    name: string;
  }[];
  projectsPage?: {
    title: string;
    description: string;
    link?: string;
    pictureFileName?: string;
    skills?: string;
  }[];
}
