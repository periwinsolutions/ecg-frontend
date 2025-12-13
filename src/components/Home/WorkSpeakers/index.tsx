import React from "react";

const ProblemWeSolve = () => {
  return (
    <section className="bg-white dark:bg-gray-900">

      {/* Single Continuous Parallax Section */}
      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero/parallex.png')",
        }}
      >
        {/* Dark Overlay for entire section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

        {/* Main Content Container */}
        <div className="relative pt-20 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
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

              {/* Main Heading */}
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The problem we're solving
              </h2>

              {/* Description */}
              <p 
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Poverty in Western countries is often invisible. It shows up in
                quiet ways — children missing school, families skipping meals, and
                young lives shaped by circumstances no child should face.
              </p>
            </div>

            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Hidden challenges children face
              </h3>
              <p 
                className="text-lg text-white/80 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                These barriers prevent children from reaching their full potential
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              
              {/* Card 1 */}
              <div 
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Missed education
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Children miss school because they lack uniforms, supplies, or a
                  stable home environment, putting them behind before they've even
                  begun.
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
                    <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
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
                    <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
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
                    <span className="text-blue-600 dark:text-blue-300 font-bold">4</span>
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

            {/* Context Section */}
            <div 
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-white/20 dark:border-gray-700/50"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  These challenges don't exist in isolation
                </h4>
                <p className="text-lg text-white/90">
                  Each problem is connected to the others. Missed meals lead to difficulty concentrating, 
                  which leads to falling behind in school, which leads to social exclusion. 
                  That's why our approach addresses the whole child, not just one problem at a time.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="mt-16 text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Get involved today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ProblemWeSolve;