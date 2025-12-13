const MissionVision = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span 
              className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Our Purpose
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Our Mission and Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide immediate material aid and sustainable educational support to children from impoverished homes—specifically 
              targeting families, including single and married couples, struggling with the daily economic needs in Western economies.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 border border-green-100 dark:border-green-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A world where no child in a developed nation faces discrimination, misses school, or suffers nutritional deprivation 
              due to poverty, allowing them to pursue dignity and realize their full potential.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;