"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <FadeIn>
              <p className="text-mono text-gray-500 mb-4">CONTACT</p>
              <h2 className="text-headline mb-6">GET IN TOUCH</h2>
              <p className="text-body text-gray-400 max-w-md">
                Have a project in mind or just want to say hello?
                Send me a message.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-mono text-gray-500 block mb-2">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-mono text-gray-500 block mb-2">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-mono text-gray-500 block mb-2">MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-black py-4 text-mono tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-small text-green-400"
                >
                  Message sent successfully.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-small text-red-400"
                >
                  Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
