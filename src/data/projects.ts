export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  year: number;
  featured: boolean;
  protected: boolean;
  password?: string;
}

export const projects: Project[] = [
  {
    slug: "veilingen-ai",
    title: "VEILINGEN.AI",
    description: "AI-powered auction platform",
    tags: ["AI", "WEB"],
    liveUrl: "https://veilingen.ai",
    year: 2024,
    featured: true,
    protected: false,
  },
  {
    slug: "investment-dashboard",
    title: "INVESTMENT DASHBOARD",
    description: "Portfolio tracking and analysis",
    tags: ["FINANCE", "WEB"],
    liveUrl: "https://investment-dashboard.wardvangestel.com",
    year: 2024,
    featured: true,
    protected: true,
    password: "demo123",
  },
  {
    slug: "todo",
    title: "TODO",
    description: "Minimal task management",
    tags: ["PRODUCTIVITY", "WEB"],
    liveUrl: "https://todo.wardvangestel.com",
    year: 2024,
    featured: true,
    protected: true,
    password: "demo123",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
