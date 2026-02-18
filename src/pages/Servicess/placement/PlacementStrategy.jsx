const PlacementStrategy = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-3 grid md:grid-cols-2 md:gap-8 gap-8">

        {/* LEFT HEADING */}
        <div>
          <div className="w-16 h-[3px] bg-[#0056D2] mb-8"></div>

          <h2 className="text-3xl font-semibold text-gray-700 leading-tight ml-5">
            Delivering placement outcomes –
            <br className="md:hidden" />
            on-time and on-budget
          </h2>
        </div>

        {/* RIGHT PARAGRAPH */}
        <div>
          <p className="text-gray-500 font-light leading-relaxed">
            Our placement services are designed to support organizations 
            in securing qualified and industry-ready candidates through 
            a structured recruitment coordination framework. We focus on 
            skill alignment, candidate evaluation, and streamlined hiring 
            processes to ensure timely onboarding.
          </p>

          <p className="mt-6 text-gray-500 font-light leading-relaxed">
            By combining academic preparation with industry expectations, 
            we help reduce hiring gaps and improve workforce readiness. 
            Our approach emphasizes transparency, compliance, and 
            performance-driven candidate placement.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlacementStrategy;
