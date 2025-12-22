import { Logo } from "@/components/Logo";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Todo",
    description: "A minimal task management application",
    url: "https://todo.wardvangestel.com",
    password: "demo123", // Change this to your actual password
  },
  {
    title: "Investment Dashboard",
    description: "Track and analyze your investment portfolio",
    url: "https://investment-dashboard.wardvangestel.com",
    password: "demo123", // Change this to your actual password
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <Logo className="mb-8" />
          <h1 className="text-2xl font-medium text-black">Ward van Gestel</h1>
          <p className="mt-1 text-gray-500">Creative Developer</p>
        </header>

        {/* Bio Section - Placeholder */}
        <section className="mb-16">
          <p className="text-gray-600 leading-relaxed">
            {/* Add your bio here */}
            Welcome to my portfolio. Here you can find some of the projects I&apos;ve been working on.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-100">
          <a
            href="mailto:your@email.com"
            className="text-sm text-gray-400 hover:text-black transition-colors"
          >
            your@email.com
          </a>
        </footer>
      </div>
    </div>
  );
}
