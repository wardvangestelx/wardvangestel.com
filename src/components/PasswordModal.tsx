"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PasswordModalProps {
  projectName: string;
  correctPassword: string;
  onSuccess: () => void;
  onClose: () => void;
}

export function PasswordModal({
  projectName,
  correctPassword,
  onSuccess,
  onClose,
}: PasswordModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-sm bg-white p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-mono text-gray-400">PROTECTED</p>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <h2 className="text-title mb-1">{projectName}</h2>
          <p className="text-small text-gray-500 mb-6">
            Enter password to access
          </p>

          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className={`w-full border-b bg-transparent py-2 text-small text-black placeholder-gray-400 focus:outline-none transition-colors uppercase tracking-wider ${
                error ? "border-red-500" : "border-gray-200 focus:border-black"
              }`}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-mono text-red-500"
              >
                INCORRECT
              </motion.p>
            )}
            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-3 text-mono tracking-wider hover:bg-gray-900 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
