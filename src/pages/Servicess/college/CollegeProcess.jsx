const steps = [
  {
    title: "Academic Consultation",
    description:
      "Comprehensive evaluation of academic background, interests, and long-term career direction to define the right admission pathway."
  },
  {
    title: "Course & Institution Mapping",
    description:
      "Strategic shortlisting of institutions aligned with eligibility criteria, accreditation standards, and academic strength."
  },
  {
    title: "Application & Documentation Review",
    description:
      "Structured assistance in preparing, reviewing, and submitting accurate application documentation."
  },
  {
    title: "Admission Tracking & Advisory",
    description:
      "Ongoing coordination and follow-up support until admission confirmation."
  }
];

const CollegeProcess = () => {
  return (
    <section className="py-24 border-t border-[#0056D2]/20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-600">
            Our Admission Framework
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-5"></div>

          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            A structured, transparent, and step-driven approach to simplify
            the college admission journey with clarity and confidence.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">

          {/* Vertical Brand Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#0056D2]/30"></div>

          <div className="space-y-14">

            {steps.map((step, index) => (
              <div key={index} className="relative pl-16">

                {/* Step Number */}
                <div className="absolute left-0 top-0">
                  <div className="w-10 h-10 border border-[#0056D2] flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#0056D2]">
                      {`0${index + 1}`}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-700">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-500 font-medium leading-relaxed max-w-2xl">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CollegeProcess;
