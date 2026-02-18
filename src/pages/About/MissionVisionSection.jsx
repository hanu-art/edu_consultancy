import React from "react";

const MissionVisionSection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2">

          {/* Mission Content */}
          <div className="flex items-center px-10 py-20">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-6">
                Our Mission
              </h3>

              <div className="pl-6 border-l-2 border-[#0056D2]">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  To guide students toward meaningful academic and career paths
                  through personalized counseling, transparent processes, and
                  trusted institutional partnerships. We strive to simplify
                  admissions, enhance career readiness, and create pathways that
                  lead to long-term professional success.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image */}
          <div className="h-[350px] md:h-auto">
            <img
              src="/images/afterHero.png"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="grid md:grid-cols-2">

          {/* Vision Image */}
          <div className="h-[350px] md:h-auto order-2 md:order-1">
            <img
              src="/images/about_us.png"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vision Content */}
          <div className="flex items-center px-10 py-20 order-1 md:order-2">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-6">
                Our Vision
              </h3>

              <div className="pl-6 border-l-2 border-[#0056D2]">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  To become a leading education and placement consultancy,
                  recognized for empowering students and professionals with
                  the right opportunities. We aim to build a trusted ecosystem
                  connecting learners, institutions, and employers for
                  sustainable career growth.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
