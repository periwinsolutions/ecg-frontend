import Image from "next/image";

const MissionStory = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[9/16] relative">
                <Image
                  src="/images/hero/founder.jpeg"
                  alt="A mother and child in need - the moment that inspired our mission"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top" 
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary dark:bg-blue-900/30 rounded-full">
                <span 
                  className="inline-block w-1.5 h-1.5 bg-white dark:bg-blue-400 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-white dark:text-blue-300 uppercase tracking-wider">
                  The Inciting Incident
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Our <span className="text-primary">'Why'</span>
              </h2>

              {/* Story Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  While hospitalized, I experienced a moment that forever changed my perspective on poverty in the Western world. 
                  Across the room was a mother with four young children. Despite being in a hospital—a place of presumed care—she was 
                  begging me for extra food because I wasn't eating.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  She was sharing every spare scrap with her children and their father, both parents scraping by with disheartening desperation.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Their poverty was visible and deeply affecting: the children were often unkempt, and the mother confessed they were 
                  frequently discriminated against and missed school because they simply lacked basic resources.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 italic text-gray-700 dark:text-gray-300 text-lg">
                  It was an untenable situation where dedicated parents were failing not through lack of love, 
                  but through the crushing weight of economic struggle.
                </blockquote>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  In that hospital room, I made an unwavering commitment: once well, I would dedicate myself to fighting this invisible crisis. 
                  This organization is the result of that promise.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionStory;