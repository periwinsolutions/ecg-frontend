const MissionAccountability = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary dark:bg-blue-900/30 rounded-full">
            <span 
              className="inline-block w-1.5 h-1.5 bg-white dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-white dark:text-blue-300 uppercase tracking-wider">
              Our Promise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Accountability and Transparency
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Direct Distribution</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Efficient Resource Allocation</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              All aid will be distributed via established community channels to ensure resources reach the intended 
              beneficiaries directly and efficiently. We work closely with schools, social workers, and community 
              centers to identify families most in need.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Transparent Tracking</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Every Dollar Accounted For</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We commit to transparent tracking of donations, demonstrating how every dollar impacts a child's life, 
              from a single meal to a full year of educational support. Regular reports are published showing exactly 
              where funds are allocated and the impact achieved.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-600 dark:bg-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Impact Measurement</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Real Results, Real Stories</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond financial transparency, we measure real-world impact: school attendance rates, nutritional 
              improvements, and educational progress. Success stories from families we've supported demonstrate 
              the tangible difference your support makes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionAccountability;