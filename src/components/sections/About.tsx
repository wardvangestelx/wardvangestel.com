"use client";

import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/DSC05969.JPG"
                alt="Ward van Gestel"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-mono text-gray-400 mb-4">ABOUT</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-headline mb-6">
                CREATIVE DEVELOPER
                <br />
                CRAFTING DIGITAL
                <br />
                EXPERIENCES
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 text-body text-gray-600">
                <p>
                  Creative developer based in the Netherlands.
                  Building digital products that combine clean design
                  with thoughtful engineering.
                </p>
                <p>
                  Focused on creating web applications that are both
                  beautiful and functional. Simplicity, attention
                  to detail, building things that matter.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-mono text-gray-400 mb-3">STACK</p>
                <div className="flex flex-wrap gap-2">
                  {["NEXT.JS", "TYPESCRIPT", "TAILWIND", "REACT", "NODE.JS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-mono text-gray-600 px-3 py-1.5 border border-gray-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
