import { Link } from "react-router-dom";

const PlacementHero = () => {
  return (
    <section className="relative h-[400px] w-full">

      {/* Background Image */}
      <img
        src="/images/about_intro_after.png"
        alt="Placement Assistance"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl">

            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Connecting Qualified Talent with
              <br />
              Industry Opportunities
            </h1>

            <div className="w-20 h-[3px] bg-[#0056D2] mt-6"></div>

            <p className="mt-6 text-white font-light leading-relaxed max-w-2xl">
              Our placement assistance program is designed to align skilled
              candidates with verified hiring partners through structured
              evaluation, interview preparation, and corporate coordination.
            </p>

            <Link to="/contact">
              <button className="mt-8 bg-[#0056D2] hover:bg-[#0047B3] text-white px-10 py-2 transition">
                Talk to an Expert
              </button>
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
};

export default PlacementHero;
