export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  videoUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SectionRef {
  [key: string]: React.RefObject<HTMLElement>;
}