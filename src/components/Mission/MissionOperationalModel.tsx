import Image from "next/image";

const operationalPillars = [
  {
    title: "Immediate Material Aid",
    subtitle: "Restoring Dignity",
    items: [
      {
        title: "Food Security",
        description: "Providing weekly packages of non-perishable goods and fresh produce, ensuring consistent, nutritious meals.",
        icon: "🍎"
      },
      {
        title: "Essentials Vouchers",
        description: "Distributing vouchers for clothing, footwear, and hygiene products to ensure children are clean and presentable.",
        icon: "👕"
      },
      {
        title: "Winter Warmth",
        description: "Providing coats, gloves, and warm clothing to prevent health issues related to inadequate protection.",
        icon: "🧥"
      }
    ]
  },
  {
    title: "Long-Term Educational Support",
    subtitle: "Breaking the Cycle",
    items: [
      {
        title: "School Attendance Kit",
        description: "Providing backpacks, stationary, uniforms, and specific gear required for school activities.",
        icon: "🎒"
      },
      {
        title: "Tutoring Access",
        description: "Funding small-group tutoring or providing digital resources to help children catch up on missed education.",
        icon: "📚"
      },
      {
        title: "Mentorship Program",
        description: "Pairing children with screened volunteers who can provide encouragement and guidance.",
        icon: "🤝"
      }
    ]
  }
];

const MissionOperationalModel = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary dark:bg-blue-900/30 rounded-full">
            <span 
              className="inline-block w-1.5 h-1.5 bg-white dark:bg-blue-400 rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-white dark:text-blue-300 uppercase tracking-wider">
              Our Approach
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            The Operational Model: Our <span className="text-primary">'How'</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our strategy is two-fold: addressing Immediate Needs to stabilize the home environment and focusing on 
            Long-Term Needs to break the cycle of poverty through education.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[16/6] relative">
              <Image
                src="/images/hero/parallex.png"
                alt="Our comprehensive approach to helping children in need"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Operational Pillars */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {operationalPillars.map((pillar, index) => (
            <div key={index} className="space-y-6">
              {/* Pillar Header */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Pillar Items */}
              <div className="space-y-6">
                {pillar.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Target Beneficiaries */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Target Beneficiaries
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We focus on families identified through verified partnerships (schools, social workers, community centers) 
            where parents are actively struggling to meet basic daily requirements, whether they are single-parent households 
            or two-parent households coping with economic hardship.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionOperationalModel;