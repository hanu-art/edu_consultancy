import React from "react";

const AboutSinceSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Our Business Since 2005
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#0056D2] mx-auto mt-4 mb-6"></div>

        {/* Content */}
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          Established in 2005, our consulting practice was built on a commitment
          to delivering strategic clarity and measurable outcomes. Over the years,
          we have collaborated with organizations across industries, helping them
          navigate complexity, optimize operations, and build resilient growth
          strategies. Our approach combines analytical depth with forward-looking
          insight to drive sustainable business transformation.
        </p>

      </div>
    </section>
  );
};

export default AboutSinceSection;
