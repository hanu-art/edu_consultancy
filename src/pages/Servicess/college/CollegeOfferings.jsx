const offerings = [
  {
    title: "Career & Course Counseling",
    description:
      "Personalized consultation sessions to align academic background with suitable career paths and degree programs."
  },
  {
    title: "Institution Selection Strategy",
    description:
      "Structured shortlisting of colleges based on eligibility, accreditation, infrastructure, and long-term value."
  },
  {
    title: "Documentation & Application Support",
    description:
      "End-to-end guidance for documentation review, form submission, and compliance with institutional requirements."
  },
  {
    title: "Admission Tracking & Coordination",
    description:
      "Ongoing follow-up and coordination support until final admission confirmation."
  }
];

const CollegeOfferings = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-700">
            What We Offer
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-3"></div>

          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            Our admission advisory services are structured to provide clarity,
            transparency, and strategic direction throughout the college
            selection and application journey.
          </p>

          <div className="mt-10 space-y-10">

            {offerings.map((item, index) => (
              <div key={index}>

                <div className="flex items-center gap-4">
                  <span className="w-6 h-[2px] bg-[#0056D2]"></span>
                  <h3 className="text-sm font-semibold text-gray-700">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1 text-gray-500 font-medium leading-relaxed pl-10">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/afterHero.png"
            alt="Admission Support"
            className="w-full h-[480px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default CollegeOfferings;
