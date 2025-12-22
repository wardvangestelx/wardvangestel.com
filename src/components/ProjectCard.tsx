"use client";

import { useState } from "react";
import { PasswordModal } from "./PasswordModal";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  password: string;
}

export function ProjectCard({ title, description, url, password }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSuccess = () => {
    window.open(url, "_blank");
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group w-full text-left border border-gray-200 rounded-lg p-6 transition-all hover:border-gray-400 hover:shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-black group-hover:underline">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <svg
            className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>

      {showModal && (
        <PasswordModal
          projectName={title}
          correctPassword={password}
          onSuccess={handleSuccess}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
