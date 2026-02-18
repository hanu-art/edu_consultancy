import { Link } from "react-router-dom";

const InternshipFinalCTA = () => {
  return (
    <section className="py-20 border-t border-[#0056D2]/20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 leading-tight">
            Begin Your Professional Development Journey
          </h2>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-5"></div>

          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            Take the next step toward industry readiness with structured
            mentorship, practical exposure, and performance-based evaluation.
            Connect with our team to learn more about internship availability
            and enrollment guidance.
          </p>

          <Link to="/contact">
            <button className="mt-8 bg-[#0056D2] hover:bg-[#0047B3] text-white px-10 py-2 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/about_us.png"
            alt="Professional Internship Environment"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default InternshipFinalCTA;

