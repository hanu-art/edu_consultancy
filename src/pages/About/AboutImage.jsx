import React from "react";

const AboutImage = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src="/images/about_intro_after.png"
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutImage;
