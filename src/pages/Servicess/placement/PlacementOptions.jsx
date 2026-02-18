
const PlacementOptions = () => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-gray-700 text-center">
          Choose the Right Placement Model
        </h2>

        <div className="w-20 h-[3px] bg-[#0056D2] mx-auto mt-6"></div>

        {/* Option Box */}
        <div className="mt-16 border border-gray-200">

          {/* Tabs */}
          <div className="flex">

            <div className="bg-[#0056D2] text-white px-8 py-4 font-semibold">
              Contract Placement
            </div>

            <div className="px-8 py-4 font-semibold text-gray-700">
              Permanent Placement
            </div>

          </div>

          {/* Content */}
          <div className="p-10">

            <p className="text-gray-500 font-light leading-relaxed">
              Organizations often require flexible workforce solutions
              to manage short-term projects or urgent hiring needs.
              Our contract placement services provide access to
              skilled professionals without long-term commitments.
            </p>

            <p className="mt-6 text-gray-500 font-light leading-relaxed">
              We ensure timely deployment, structured screening,
              and smooth onboarding so your operational goals
              remain uninterrupted.
            </p>


          </div>

        </div>

      </div>
    </section>
  );
};

export default PlacementOptions;
