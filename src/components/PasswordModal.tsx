"use client";

import { useState, useEffect, useRef } from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm bg-white rounded-lg p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-black">Enter Password</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Enter the password to access {projectName}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`w-full border rounded-lg px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${
              error ? "border-red-500 shake" : "border-gray-200"
            }`}
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">Incorrect password</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-black text-white rounded-lg py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
