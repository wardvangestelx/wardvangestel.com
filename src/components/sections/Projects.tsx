"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featuredProjects, Project } from "@/data/projects";
import { FadeIn } from "../animations/FadeIn";
import { PasswordModal } from "../PasswordModal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (project.protected) {
      setShowModal(true);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleSuccess = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
    setShowModal(false);
  };

  return (
    <>
      <FadeIn delay={index * 0.1}>
        <motion.button
          onClick={handleClick}
          className="group w-full text-left border-t border-gray-200 py-6 md:py-8"
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 md:gap-4 mb-1">
                <span className="text-mono text-gray-400">0{index + 1}</span>
                <h3 className="text-title group-hover:opacity-50 transition-opacity">
                  {project.title}
                </h3>
                {project.protected && (
                  <span className="text-mono text-gray-400 border border-gray-200 px-2 py-0.5">
                    PROTECTED
                  </span>
                )}
              </div>
              <p className="text-small text-gray-500 md:pl-10">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 md:pl-8">
              <div className="hidden md:flex gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-mono text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </motion.button>
      </FadeIn>

      {showModal && project.password && (
        <PasswordModal
          projectName={project.title}
          correctPassword={project.password}
          onSuccess={handleSuccess}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container">
        <FadeIn>
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-mono text-gray-400">SELECTED WORK</h2>
            <span className="text-mono text-gray-400">
              ({featuredProjects.length})
            </span>
          </div>
        </FadeIn>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="border-t border-gray-200" />
      </div>
    </section>
  );
}
