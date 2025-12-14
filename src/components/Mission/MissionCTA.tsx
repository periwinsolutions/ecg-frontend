import Link from "next/link";

const MissionCTA = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary dark:bg-blue-900/30 rounded-full">
            <span 
              className="inline-block w-1.5 h-1.5 bg-white dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-white dark:text-blue-300 uppercase tracking-wider">
              Join Our Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Be Part of the Change
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            What started in a hospital room has grown into a movement. Join us in restoring dignity to children 
            and giving them the fair chance at life they deserve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.zeffy.com/en-GB/donation-form/donate-to-change-lives-5915"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-secondary
                text-white font-semibold rounded-lg 
                transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Donate to support our mission"
            >
              <svg 
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              Donate Now
            </Link>

           

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 
                text-gray-700 dark:text-gray-300 dark:border-gray-600 font-semibold rounded-lg
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Contact us for more information"
            >
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Final Statement */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto">
              "Our commitment is unwavering. Every child deserves dignity. Every family deserves support. 
              Together, we can make this vision a reality."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionCTA;