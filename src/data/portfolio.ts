export type IconName = "graduation" | "flask" | "brain" | "target";

export interface Project {
  name: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  results?: string;
  github?: string;
  demo?: string;
  relatedResearch?: string;
}

export interface Experience {
  role: string;
  organization: string;
  location?: string;
  dates: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  description: string;
  paperUrl?: string;
  codeUrl?: string;
}

export const portfolioData = {
  personal: {
    name: "Meng Socheata",
    title: "Deep Learning Researcher",
    university: "Pusan National University",
    location: "Busan, South Korea",
    intro:
      "I'm a student at Pusan National University exploring deep learning and building my understanding of modern AI systems, with a particular interest in Large Language Models and Computer Vision.",
  },
  current: {
    label: "Currently",
    lastUpdated: "September 2026",
    items: [
      { icon: "graduation" as IconName, label: "Studying", value: "Pusan National University" },
      { icon: "flask" as IconName, label: "Researching", value: "Deep Learning" },
      {
        icon: "brain" as IconName,
        label: "Exploring",
        value: "Large Language Models and Computer Vision",
      },
      {
        icon: "target" as IconName,
        label: "Looking For",
        value: "Academic research opportunities and internships",
      },
    ],
  },
  researchInterests: [
    {
      area: "Deep Learning",
      index: "01",
      topics: ["Neural networks", "Representation learning"],
      description:
        "Exploring deep learning methods and how neural networks can learn useful representations from complex data.",
      relatedProjects: [] as string[],
    },
    {
      area: "Large Language Models",
      index: "02",
      topics: ["Language models", "Capabilities & applications"],
      description:
        "Interested in understanding and exploring modern language models, their capabilities, and applications.",
      relatedProjects: [] as string[],
    },
    {
      area: "Computer Vision",
      index: "03",
      topics: ["Visual understanding", "Deep visual learning"],
      description:
        "Interested in using deep learning to understand and extract meaningful information from visual data.",
      relatedProjects: [] as string[],
    },
  ],
  researchDirection:
    "My current interests are centered around deep learning, with a focus on Large Language Models and Computer Vision. I am interested in understanding how modern deep learning systems learn, represent, and process complex information.",
  academicProfile: {
    institution: "Pusan National University",
    description:
      "Currently studying and exploring research in deep learning and artificial intelligence.",
    degree: null,
    major: null,
    graduationDate: null,
    coursework: [] as string[],
    awards: [] as string[],
  },
  skills: [
    { category: "Programming", items: [] as string[] },
    { category: "Machine Learning / Deep Learning", items: [] as string[] },
    { category: "AI", items: [] as string[] },
    { category: "Tools", items: [] as string[] },
  ],
  opportunities:
    "I am interested in academic research opportunities, short-term research internships, and opportunities to learn and contribute to AI and deep learning research.",
  projects: [] as Project[],
  experience: [] as Experience[],
  publications: [] as Publication[],
  achievements: [] as string[],
  socialLinks: {
    email: null,
    github: null,
    linkedin: null,
    cv: null,
  },
} as const;
