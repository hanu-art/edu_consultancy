import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="w-full py-20 bg-[#0056D2]">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-normal text-white/90">
          Ready to Transform Your Business?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
          Partner with us for expert guidance and structured strategies that drive growth and measurable success.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/contact"
            className="border border-white text-white hover:bg-white hover:text-[#0056D2] text-sm font-medium px-8 py-2.5 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="bg-white text-[#0056D2] hover:bg-gray-100 text-sm font-medium px-8 py-2.5 transition"
          >
            Get Your Free Consultation
          </Link>

        </div>

      </div>
    </section>
  );
}
