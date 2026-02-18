import { Link } from "react-router-dom";

const ITInternshipHero = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-3xl md:text-3xl font-semibold text-gray-700 leading-tight">
            Industry-Oriented IT Internship Program
          </h1>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-6"></div>

          <p className="mt-6 text-gray-500 font-small leading-relaxed">
            Our IT internship program is designed to provide practical exposure 
            to real-world development environments through structured training, 
            guided mentorship, and project-based learning. We focus on building 
            technical confidence, industry readiness, and professional discipline 
            aligned with current market expectations.
          </p>

          <Link to="/contact">
            <button className="mt-8 bg-[#0056D2] hover:bg-[#0047B3] text-white px-10 py-2 transition">
              Contact Us
            </button>
          </Link>
        </div>

        <div>
          <img
            src="/images/afterHero.png"
            alt="IT Internship"
            className="w-full h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ITInternshipHero;
