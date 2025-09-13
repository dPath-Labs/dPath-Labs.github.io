export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  initials: string;
  links: {
    publications?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    googleScholar?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  category: 'aerial' | 'swarm' | 'ml' | 'perception' | 'ground';
  tags: string[];
  link?: string;
  award?: string;
}

export interface ResearchArea {
  id: string;
  name: string;
  type: string;
  description: string;
  links: {
    paper?: string;
    demo?: string;
    code?: string;
    simulation?: string;
    dataset?: string;
  };
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface PaperTemplate {
  id: string;
  title: string;
  subtitle?: string;
  authors: {
    name: string;
    affiliation: string;
    isCorresponding?: boolean;
    equalContribution?: boolean;
  }[];
  venue: string;
  year: number;
  award?: string;
  links: {
    pdf?: string;
    code?: string;
    dataset?: string;
    demo?: string;
    video?: string;
  };
  abstract: string;
  sections: {
    title: string;
    content: string;
    subsections?: {
      title: string;
      content: string;
    }[];
  }[];
  references?: string[];
}