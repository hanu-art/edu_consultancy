import React from "react";

const MapCon = () => {
  return (
    <section className="relative w-full">

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        
        {/* Map Image */}
        <img
          src="/images/map.jpeg"
          alt="Office Location Map"
          className="w-full h-full object-cover"
        />

        {/* Soft Blue Overlay */}
        <div className="absolute inset-0 bg-[#007bff]/10"></div>

      </div>

    </section>
  );
};

export default MapCon;
