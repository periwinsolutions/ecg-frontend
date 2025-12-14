"use client";
import React from "react";
import Image from "next/image";

interface MissionItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MISSION_ITEMS: MissionItem[] = [
  {
    id: 1,
    title: "Nutritious Food Access",
    description: "Provide reliable access to nutritious food for children living in poverty.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Educational Essentials",
    description: "Supply school bags, uniforms, and essential materials so children can attend school with confidence.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Family Support",
    description: "Support families with basic essentials that protect children's health, wellbeing, and self-esteem.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Barrier Removal",
    description: "Remove practical barriers that prevent children from learning and participating fully in everyday life.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];



const Highlight = () => {
  return (
    <section 
      id="mission-section"
      aria-labelledby="mission-heading"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Mission */}
          <div>
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <span 
                  className="inline-block w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-primary dark:text-blue-300 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              {/* Heading */}
              <h1 
                id="mission-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Our ambition is to empower every child
              </h1>

              {/* Description */}
              <div className="mb-10">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our ambition is simple and unwavering. We want to ensure that no
                  child is held back by circumstances beyond their control. We focus
                  on meeting essential needs first, so children can grow, learn, and
                  live with dignity.
                </p>
              </div>

              {/* Mission Items */}
              <ul 
                className="space-y-4 mb-12"
                aria-label="Our mission goals"
              >
                {MISSION_ITEMS.map((item, index) => (
                  <li 
                    key={item.id}
                    className="group"
                  >
                    <article className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 
                      hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div 
                        className="flex-shrink-0 w-10 h-10 text-primary dark:bg-blue-900/20 rounded-lg 
                          flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30
                          transition-colors duration-200"
                        aria-hidden="true"
                      >
                        <span className="text-blue-600 dark:text-blue-400">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Right Content - Image */}
          <div>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero/ambition.png"
                    alt="Children supported through our mission to empower every child with education, nutrition, and essential support"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  {/* Image overlay for better text contrast */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" 
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg 
                  border border-gray-100 dark:border-gray-700 max-w-xs"
                role="complementary"
                aria-label="Mission statement"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 bg-primary dark:bg-primary rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Every Child Matters
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Join our mission today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlight;