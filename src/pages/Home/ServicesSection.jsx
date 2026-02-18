import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-3">

        {/* ================= CARD 1 ================= */}
        <div className="relative overflow-hidden bg-[#0056D2] text-white p-10 md:p-14 min-h-[380px] md:min-h-[460px] flex flex-col justify-center">

          {/* Pattern Top Right */}
          <svg
            className="absolute -top-10 -right-10 w-72 h-72 opacity-20"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="210" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="90" stroke="white" strokeWidth="1.2"/>
          </svg>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium">
              Education & College Guidance
            </h3>

            <p className="mt-6 text-base leading-relaxed text-white/90">
              We maintain strong partnerships with leading colleges and universities,
              helping students secure admissions in recognized institutions. Our
              expert counselors guide you through program selection, documentation,
              and career-oriented academic planning.
            </p>

            <Link
              to="/services/college"
              className="inline-block mt-8 text-sm underline"
            >
              Explore College Services
            </Link>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="relative overflow-hidden bg-[#f5f7fa] text-[#1F2D3D] p-10 md:p-14 min-h-[380px] md:min-h-[460px] flex flex-col justify-center">

          {/* Pattern Center Bottom */}
          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 opacity-20"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="210" stroke="#0056D2" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="180" stroke="#0056D2" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="150" stroke="#0056D2" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="120" stroke="#0056D2" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="90" stroke="#0056D2" strokeWidth="1.2"/>
          </svg>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium">
              IT Institute & Skill Development
            </h3>

            <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
              We collaborate with reputed IT institutes and training partners to
              provide industry-relevant programs in modern technologies. Our focus
              is on building practical skills that align with real company
              requirements and job market demands.
            </p>

            <Link
              to="/services/it-institute"
              className="inline-block mt-8 text-sm underline text-[#0056D2]"
            >
              Discover IT Programs
            </Link>
          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div className="relative overflow-hidden bg-[#0056D2] text-white p-10 md:p-14 min-h-[380px] md:min-h-[460px] flex flex-col justify-center">

          {/* Pattern Bottom Left */}
          <svg
            className="absolute -bottom-10 -left-10 w-72 h-72 opacity-20"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="210" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="1.2"/>
            <circle cx="250" cy="250" r="90" stroke="white" strokeWidth="1.2"/>
          </svg>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium">
              Job Placement & Company Connections
            </h3>

            <p className="mt-6 text-base leading-relaxed text-white/90">
              Through our network of hiring companies and corporate partners,
              we assist candidates in securing job opportunities aligned with
              their qualifications. From resume enhancement to interview
              preparation, we provide end-to-end placement support.
            </p>

            <Link
              to="/services/job-placement"
              className="inline-block mt-8 text-sm underline"
            >
              View Placement Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
