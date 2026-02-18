const overviewPoints = [
  {
    title: "Real Project Exposure",
    description:
      "Interns work on structured assignments aligned with real-world development workflows and collaborative environments."
  },
  {
    title: "Guided Mentorship",
    description:
      "Continuous technical supervision and performance feedback to ensure structured improvement and clarity."
  },
  {
    title: "Professional Readiness",
    description:
      "Focus on communication, documentation, and disciplined execution aligned with corporate expectations."
  }
];

const InternshipOverview = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-700">
            Structured Industry Exposure
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-5"></div>

          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            Our IT internship program is designed to simulate professional 
            development environments where interns gain structured exposure 
            to industry practices, collaborative workflows, and disciplined execution.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {overviewPoints.map((item, index) => (
            <div key={index} className="relative">

              {/* Brand Accent */}
              <div className="w-10 h-[3px] bg-[#0056D2] mb-6"></div>

              {/* Number */}
              <span className="text-sm font-semibold text-[#0056D2]">
                {`0${index + 1}`}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-gray-700">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-500 font-small leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InternshipOverview;
