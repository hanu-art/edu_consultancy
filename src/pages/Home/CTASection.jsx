import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative w-full py-28">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/afterHero.png"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay (Brand Color) */}
      <div className="absolute inset-0 bg-[#007bff]/85"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-medium">
          Ready to Elevate Your Placement Outcomes?
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
          Partner with us to build structured recruitment strategies,
          strengthen corporate collaborations, and deliver measurable
          placement success for your institution.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary Button */}
          <Link
            to="/contact"
            className="bg-white text-[#007bff] text-sm font-medium px-8 py-3 transition hover:bg-gray-100"
          >
            Schedule a Consultation
          </Link>

          {/* Secondary Button */}
          <Link
            to="/services/college"
            className="border border-white text-white text-sm font-medium px-8 py-3 transition hover:bg-white hover:text-[#007bff]"
          >
            Explore Our Services
          </Link>

        </div>
      </div>
    </section>
  );
}
