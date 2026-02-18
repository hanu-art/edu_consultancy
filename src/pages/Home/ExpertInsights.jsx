import { Link } from "react-router-dom";

export default function ExpertInsights() {
  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
              Expert Insights
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
              Strategic insights designed to help colleges, IT institutes,
              and placement-driven organizations strengthen recruitment
              frameworks and industry partnerships.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              to="/about"
              className="border border-gray-400 text-gray-700 text-sm px-6 py-2 rounded-md hover:border-[#007bff] hover:text-[#007bff] transition"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="group">
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/industry_e1.png"
                alt="Campus Recruitment"
                className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Strengthening Campus Recruitment Strategy
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Implement structured hiring frameworks to improve employer
              engagement and increase campus placement success rates.
            </p>

            <Link
              to="/services/college"
              className="inline-block mt-4 text-sm text-[#007bff] font-medium hover:underline"
            >
              Read More
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/industry_e2.png"
                alt="Curriculum Optimization"
                className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Curriculum Alignment with Industry Standards
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Redesign academic programs to match evolving corporate demands
              and improve student employability outcomes.
            </p>

            <Link
              to="/services/it-institute"
              className="inline-block mt-4 text-sm text-[#007bff] font-medium hover:underline"
            >
              Read More
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/industry_e3.png"
                alt="Placement Mentorship"
                className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Improving Placement & Mentorship Systems
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Strengthen mock interview programs and corporate networking
              initiatives to boost final hiring performance.
            </p>

            <Link
              to="/services/job-placement"
              className="inline-block mt-4 text-sm text-[#007bff] font-medium hover:underline"
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
