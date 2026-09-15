export type TechGroup =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Cloud & DevOps"
  | "Commerce";

export type Tech = {
  id: string;
  name: string;
  group: TechGroup;
  logo: string;
};

export const techStack: Tech[] = [
  // Languages
  { id: "php", name: "PHP", group: "Languages", logo: "/tech/php.svg" },
  { id: "python", name: "Python", group: "Languages", logo: "/tech/python.svg" },
  { id: "javascript", name: "JavaScript", group: "Languages", logo: "/tech/javascript.svg" },
  { id: "typescript", name: "TypeScript", group: "Languages", logo: "/tech/typescript.svg" },
  { id: "html5", name: "HTML5", group: "Languages", logo: "/tech/html5.svg" },
  { id: "css3", name: "CSS3", group: "Languages", logo: "/tech/css3.svg" },

  // Frontend
  { id: "react", name: "ReactJS", group: "Frontend", logo: "/tech/react.svg" },
  { id: "nextjs", name: "Next.js", group: "Frontend", logo: "/tech/nextjs.svg" },
  { id: "angular", name: "Angular", group: "Frontend", logo: "/tech/angular.svg" },
  { id: "react-native", name: "React Native", group: "Frontend", logo: "/tech/react.svg" },
  { id: "tailwind", name: "Tailwind CSS", group: "Frontend", logo: "/tech/tailwindcss.svg" },
  { id: "mui", name: "Material UI", group: "Frontend", logo: "/tech/materialui.svg" },

  // Backend
  { id: "nodejs", name: "Node.js", group: "Backend", logo: "/tech/nodejs.svg" },
  { id: "express", name: "ExpressJS", group: "Backend", logo: "/tech/express.svg" },
  { id: "flask", name: "Flask", group: "Backend", logo: "/tech/flask.svg" },

  // Databases
  { id: "mysql", name: "MySQL", group: "Databases", logo: "/tech/mysql.svg" },
  { id: "postgresql", name: "PostgreSQL", group: "Databases", logo: "/tech/postgresql.svg" },
  { id: "mssql", name: "MSSQL", group: "Databases", logo: "/tech/mssql.svg" },
  { id: "mongodb", name: "MongoDB", group: "Databases", logo: "/tech/mongodb.svg" },

  // Cloud & DevOps
  { id: "aws", name: "AWS", group: "Cloud & DevOps", logo: "/tech/aws.svg" },
  { id: "docker", name: "Docker", group: "Cloud & DevOps", logo: "/tech/docker.svg" },
  {
    id: "github-actions",
    name: "GitHub Actions",
    group: "Cloud & DevOps",
    logo: "/tech/githubactions.svg",
  },

  // Commerce
  { id: "shopify", name: "Shopify", group: "Commerce", logo: "/tech/shopify.svg" },
];

export const techGroups: TechGroup[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "Commerce",
];
