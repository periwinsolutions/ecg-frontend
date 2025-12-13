import React from "react";

const ProblemWeSolve = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Entire Parallax Section - Background covers everything */}
      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero/parallex.png')",
        }}
      >
        {/* Dark Overlay for entire section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

        {/* Top Content (Original parallax text) */}
        <div className="relative h-[560px] md:h-[620px] flex items-center">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span
                  className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-white uppercase tracking-wider">
                  The Reality
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The problem we're solving
              </h2>

              {/* Description */}
              <p
                className="text-lg md:text-xl text-white/90 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Poverty in Western countries is often invisible. It shows up in
                quiet ways — children missing school, families skipping meals,
                and young lives shaped by circumstances no child should face.
              </p>

    
            </div>
          </div>
        </div>

        {/* Cards Section - Now part of parallax */}
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-4 lg:mb-8">
              <div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                data-aos="fade-up"
              >
                <span
                  className="inline-block w-1.5 h-1.5 bg-white rounded-full"
                  aria-hidden="true"
                />
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                What children face every day
              </h3>
              <p
                className="text-lg text-white/90 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                These barriers prevent children from reaching their full
                potential
              </p>
            </div>

            {/* Cards Grid - Semi-transparent backgrounds */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">
                      1
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Missed education
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Children miss school because they lack uniforms, supplies, or
                  a stable home environment, putting them behind before they've
                  even begun.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-300/30 dark:border-gray-600/30">
                  <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">
                      2
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Social discrimination
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Poverty exposes families to judgement and exclusion, leaving
                  children isolated and quietly ashamed of circumstances beyond
                  their control.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-300/30 dark:border-gray-600/30">
                  <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">
                      3
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Nutritional deprivation
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Inconsistent access to food affects physical health, emotional
                  stability, and the ability to focus and learn.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-300/30 dark:border-gray-600/30">
                  <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">
                      4
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Lack of learning support
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Without tutoring or guidance, children who fall behind often
                  struggle to catch up, reinforcing the cycle of disadvantage.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-300/30 dark:border-gray-600/30">
                  <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Additional Context */}
            <div
              className="mt-16 pt-8 border-t border-white/20 dark:border-gray-600/30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  These challenges don't exist in isolation
                </h4>
                <p className="text-lg text-white/90">
                  Each problem is connected to the others. Missed meals lead to
                  difficulty concentrating, which leads to falling behind in
                  school, which leads to social exclusion. That's why our
                  approach addresses the whole child, not just one problem at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular section after parallax */}
      <div className="bg-white dark:bg-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to make a difference?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join us in creating lasting change for children in need.
          </p>
          <a
            href="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get involved today
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemWeSolve;
