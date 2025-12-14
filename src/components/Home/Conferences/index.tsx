import React from "react";
import Link from "next/link";
import Image from "next/image";

const Conferences = () => {
  return (
    <section 
      id="story-section"
      aria-labelledby="story-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Portrait Image - Proper handling for 9:16 aspect ratio */}
          <div 
            className="lg:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="relative overflow-hidden">
              <div className="relative mx-auto max-w-md">
                {/* Portrait container with aspect ratio */}
                <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero/founder.jpeg"
                    alt="The founder of our charity - The story behind our mission to help children in need"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top" // object-top ensures head is visible
                    priority
                    quality={90}
                  />
                  {/* Subtle overlay for better text contrast if needed */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" 
                    aria-hidden="true"
                  />
                </div>
                
                {/* Optional: Decorative element for visual balance */}
                <div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary dark:bg-blue-900/30 rounded-full">
                <span 
                  className="inline-block w-1.5 h-1.5 bg-white  text-white dark:bg-blue-400 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-xs text-white font-medium uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h1 
                id="story-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Why Our Charity Exists
              </h1>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <p 
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  This mission began in a hospital room. A mother with four young
                  children was begging for food, not for herself, but because her
                  family had nothing. The children were missing school and facing
                  discrimination simply because they lacked basic necessities.
                </p>

                <p 
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  That moment made one thing clear. Poverty in developed countries
                  is real, hidden, and devastating. This organisation exists to
                  restore dignity and give children a fair chance at life.
                </p>
              </div>

              {/* Call to Action */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 text-primary 
                    text-blue-600  font-semibold rounded-lg
                    hover:text-primary  transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Learn more about our mission"
                >
                  Learn about our mission
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Conferences;