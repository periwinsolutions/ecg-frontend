const AboutHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span 
              className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Defining Our Charity
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide essential support to children facing the challenges of impoverished homes 
            and learning disabilities, helping them build a foundation for a successful and fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;