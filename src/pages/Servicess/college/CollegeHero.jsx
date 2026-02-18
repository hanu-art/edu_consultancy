
import { Link } from "react-router-dom";
const CollegeHero = () => {
  return (
    <section className="py-24 border-b">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-700 leading-tight">
            Professional College Admission Consulting
          </h1>

          <div className="w-16 h-[2px] bg-[#0056D2] mt-6"></div>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Structured academic advisory services to help students secure 
            admissions in reputed institutions through strategic planning.
          </p>

         
          <Link to="/contact">
            <button className="mt-8 bg-[#0056D2] hover:bg-[#0047B3] text-white px-10 py-2 transition">
              Contact Us
            </button>
          </Link>
        </div>

        <div>
          <img
            src="/images/about_us.png"
            alt="College Admission"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default CollegeHero;
