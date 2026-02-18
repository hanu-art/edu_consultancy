import React from "react";

const StatsSection = () => {
  return (
    <section className="w-full bg-[#0056D2] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {/* Stat 1 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-medium text-white">
              20+
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Years of Experience
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-medium text-white">
              100+
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Successful Projects
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-medium text-white">
              80%
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Client Retention Rate
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-medium text-white">
              50+
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Industries Served
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
