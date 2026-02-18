import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section id="about-company" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 md:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          
          <h2 className="text-2xl md:text-3xl font-medium text-[#1f2d3d] leading-snug">
            Trusted Business Consultants with Proven Results
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            With over 20 years of expertise, we empower businesses to achieve
            sustainable growth, optimize operations, and drive profitability
            through strategic consulting tailored to their unique needs. Our
            dedicated team ensures measurable success at every step of your journey.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center justify-center 
                       h-[44px] min-w-[200px]
                       bg-[#0056D2] hover:bg-[#0047B3] 
                       text-white text-sm font-medium 
                       transition"
          >
            Learn More About Us
          </Link>
        </div>

        {/* RIGHT IMAGE (Bigger + Right Align) */}
        <div className="flex justify-end">
          <img
            src="/images/about_us.png"
            alt="About Company"
            className="w-full md:w-[105%] lg:w-[110%] 
                       h-[320px] md:h-[380px] lg:h-[420px] 
                       object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;
