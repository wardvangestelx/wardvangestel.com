"use client";

export function Marquee() {
  const items = [
    "CREATIVE DEVELOPER",
    "—",
    "NEXT.JS",
    "—",
    "TYPESCRIPT",
    "—",
    "TAILWIND",
    "—",
    "REACT",
    "—",
  ];

  return (
    <section className="py-4 border-y border-gray-200 overflow-hidden bg-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <span
                key={`${i}-${j}`}
                className="text-mono text-gray-400 mx-6"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
