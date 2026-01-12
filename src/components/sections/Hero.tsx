"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-8 md:pb-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/DSC06591.JPG"
          alt="Ward van Gestel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="relative z-10 w-full section-padding !pb-0">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-mono text-white/60 mb-3"
          >
            CREATIVE DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-display text-white"
          >
            WARD
            <br />
            VAN GESTEL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 md:mt-20"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="flex flex-col items-start gap-2"
            >
              <span className="text-mono text-white/40">SCROLL</span>
              <div className="w-px h-8 bg-white/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
