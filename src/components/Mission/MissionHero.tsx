import Image from "next/image";

const MissionHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <span 
                  className="inline-block w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-primary dark:text-blue-300 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                A Mission Born of <span className="text-primary">Witness</span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Restoring dignity to children in poverty
              </p>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our commitment to children in impoverished homes is not an abstract concept; 
                it is rooted in a deeply personal and unsettling truth witnessed firsthand.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero/mission-header.png"
                  alt="Children in need of support and dignity"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionHero;