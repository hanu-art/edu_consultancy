import {
  Briefcase,
  BookOpen,
  Handshake,
  MessageSquare,
} from "lucide-react";

export default function Industries() {
  return (
    <section className="w-full py-24 bg-white">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Industries We Serve
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          We empower institutions and organizations with structured consulting
          frameworks designed to enhance placements, optimize curriculum,
          and build strong corporate connections.
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2">

        {/* Premium Gradient Divider Lines (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">

          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#007bff] to-transparent opacity-70"></div>
          </div>

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full">
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#007bff] to-transparent opacity-70"></div>
          </div>

          {/* Center Diamond */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#007bff] rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
        </div>

        {/* Card 1 */}
        <div className="p-12 text-center">
          <Briefcase className="mx-auto text-[#007bff]" size={32} />
          <h3 className="mt-6 text-lg font-semibold">
            Campus Recruitment Strategy
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
            Structured placement roadmaps designed to improve hiring pipelines,
            employer engagement, and student readiness.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-12 text-center">
          <BookOpen className="mx-auto text-[#007bff]" size={32} />
          <h3 className="mt-6 text-lg font-semibold">
            Curriculum Optimization
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
            Aligning academic programs with real industry demands to ensure
            better employability and skill development.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-12 text-center">
          <Handshake className="mx-auto text-[#007bff]" size={32} />
          <h3 className="mt-6 text-lg font-semibold">
            Corporate Partnerships
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
            Building long-term collaborations with companies to strengthen
            placement networks and internship pipelines.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-12 text-center">
          <MessageSquare className="mx-auto text-[#007bff]" size={32} />
          <h3 className="mt-6 text-lg font-semibold">
            Mock Interview & Mentorship
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
            Comprehensive interview simulations and mentorship programs
            designed to boost student confidence and performance.
          </p>
        </div>

      </div>
    </section>
  );
}
