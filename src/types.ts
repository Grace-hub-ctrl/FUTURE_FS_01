export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  context?: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}
