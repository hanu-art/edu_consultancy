export default function IntroAbout() {
  return (
    <main className="bg-white">

      {/* ===============================
          ABOUT INTRO SECTION
      ================================ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE – Statement */}
            <div>
              <h1 className="text-3xl md:text-4xl font-medium leading-snug text-gray-800">
                Driving Business Success <br />
                through{" "}
                <span className="text-[#0056D2]">
                  Expertise &
                </span>
                <br />
                <span className="text-[#0056D2]">
                  Innovation
                </span>
              </h1>
            </div>

            {/* RIGHT SIDE – Content with thicker vertical brand line */}
            <div className="pl-6 border-l-2 border-[#0056D2]">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                With deep industry expertise and a results-driven consulting
                framework, we help organizations navigate operational
                challenges, strengthen strategic direction, and unlock
                long-term growth opportunities. Our approach focuses on
                measurable impact and sustainable business transformation.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
