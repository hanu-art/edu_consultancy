import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">

            <div>
              <h2 className="text-3xl font-medium text-gray-700 mb-4">
                Why Choose Us
              </h2>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                We are committed to guiding students and professionals through
                informed decisions, transparent processes, and reliable placement
                partnerships that ensure long-term academic and career success.
              </p>
            </div>

            {/* Controlled Image */}
            <div className="h-[240px] md:h-[280px] overflow-hidden">
              <img
                src="/images/afterHero.png"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center space-y-5">

            {[
              "Over a decade of hands-on experience in education and placement consulting across diverse academic institutions.",
              "Personalized academic and career counseling aligned with each student's long-term professional goals.",
              "Strong partnerships with reputed universities and trusted hiring organizations for reliable opportunities.",
              "Transparent admission, documentation, and placement processes built on clarity and accountability.",
              "Comprehensive end-to-end support from course selection and enrollment to interview preparation and placement."
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-3 max-w-lg">
                  <span className="text-[#0056D2] text-lg font-medium mt-[2px]">
                    +
                  </span>
                  <p className="text-gray-500 text-sm leading-snug">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
