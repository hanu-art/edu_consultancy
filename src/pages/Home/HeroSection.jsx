import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white pt-16 pb-28 overflow-hidden">
        
        {/* Responsive Background Contour */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 
                     bg-no-repeat bg-center bg-contain md:bg-cover"
          style={{
            backgroundImage: "url('/images/contour.png')"
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <h1 className="font-inter text-[42px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-medium text-[#1f2d3d] leading-tight">
            Drive Your Business Forward
            <br />
            with Expert Consulting
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our expert-driven strategies empower businesses to accelerate growth,
            optimize operations, and overcome challenges, ensuring sustainable
            success in an ever-evolving market.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            
            <Link
              to="/services"
              className="border border-[#0056D2] text-[#0056D2] hover:bg-[#0056D2] hover:text-white text-sm font-medium px-9 py-3 transition"
            >
              Discover Our Services
            </Link>

            <Link
              to="/contact"
              className="bg-[#0056D2] hover:bg-[#0047B3] text-white text-sm font-medium px-8 py-3 transition"
            >
              Book a Free Consultation
            </Link>

          </div>
        </div>
      </section>

      {/* ================= AFTER HERO IMAGE ================= */}
      <section>
  <img
    src="/images/afterHero.png"
    alt="After Hero"
    className="w-full 
               h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] 
               object-cover"
  />
</section>

    </>
  );
};

export default HeroSection;
