import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden "
    >
      {/* Simple background element */}
      <div className="absolute top-0 right-0 w-64 h-64 text-primary dark:bg-blue-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="max-w-2xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span
                  className="inline-block w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-primary  uppercase tracking-wider">
                  Making a Difference
                </span>
              </div>

              {/* Main Heading */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Restoring dignity for{" "}
                <span className="text-primary ">every child</span>
              </h1>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
              >
                We support children and families in Western economies who are
                struggling to meet basic needs, so no child misses school, goes
                hungry, or feels invisible because of poverty.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <Link
                  href="https://www.zeffy.com/en-GB/donation-form/donate-to-change-lives-5915"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-primary hover:bg-blue-700 
                    dark:bg-primary dark:hover:bg-primary text-white font-semibold rounded-lg 
                    transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Donate to support our mission"
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Donate Now
                </Link>

                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary
                    text-primary  dark:border-primary font-semibold rounded-lg
                    hover:bg-primary hover:text-white ransition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Learn more about our mission"
                >
                  Learn More
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

          {/* Right image */}
          <div
            className="lg:col-span-5 xl:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] lg:aspect-[3/4] relative">
                  <Image
                    src="/images/hero/new-hero.png"
                    alt="Children smiling and learning with support from our charity"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                    quality={90}
                  />
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
