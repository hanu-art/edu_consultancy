const technologies = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Data Structures & Algorithms",
    items: ["Arrays", "Linked List", "Stack & Queue", "Trees", "Sorting", "Recursion"]
  },
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Responsive UI"]
  },
  {
    category: "Backend & Server",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Server Architecture"]
  },
  {
    category: "Database Systems",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Schema Design", "Query Optimization"]
  },
  {
    category: "Cyber Security & DevOps",
    items: ["Linux", "Network Security", "OWASP", "Git", "Deployment Process"]
  }
];

const InternshipTechStack = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-700">
            Comprehensive Technology Coverage
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-5"></div>

          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            The internship curriculum includes structured exposure to core
            programming, development frameworks, security fundamentals,
            and deployment practices aligned with industry standards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="border border-gray-200 p-10 transition hover:border-[#0056D2]"
            >

              {/* Top Brand Accent */}
              <div className="w-12 h-[3px] bg-[#0056D2] mb-6"></div>

              {/* Category Title */}
              <h3 className="text-lg font-semibold text-gray-700">
                {tech.category}
              </h3>

              {/* Technology List */}
              <div className="mt-6 space-y-3">
                {tech.items.map((item, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-500 font-small"
                  >
                    {item}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InternshipTechStack;
