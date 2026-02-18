const colleges = [
  "Medicaps University",
  "IPS Academy",
  "Acropolis Institute of Technology and Research",
  "Chameli Devi Group of Institutions",
  "Indore Institute of Science and Technology",
  "Vaishnav Institute of Technology and Science",
  "Malwa Institute of Technology",
  "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
  "Prestige Institute of Management and Research",
  "Indore Management Institute",
  "Renaissance University",
  "Sanghvi Institute of Management and Science",
];

const CollegeInstitutions = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700">
            Recognized Institutions in Indore
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-5"></div>

          <p className="mt-6 text-gray-500 leading-relaxed">
            We provide structured admission guidance across leading engineering,
            management, pharmacy, and professional institutions in Indore.
            Our advisory services focus on eligibility alignment, documentation
            review, and application coordination.
          </p>
        </div>

        {/* Institutional List */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">

          {colleges.map((college, index) => (
            <div key={index} className="flex items-start gap-3">
              
              {/* Minimal Brand Marker */}
              <span className="mt-2 w-2 h-2 bg-[#0056D2]"></span>

              <p className="text-gray-700 font-medium text-[15px] leading-snug">
                {college}
              </p>

            </div>
          ))}

        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-sm text-gray-500 max-w-3xl">
          Admission decisions remain subject to institutional policies and
          eligibility criteria. We provide advisory and application support services.
        </p>

      </div>
    </section>
  );
};

export default CollegeInstitutions;
