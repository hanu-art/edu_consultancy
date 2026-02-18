import React from "react";
import IntroAbout from "./IntroAbout";
import AboutImage from "./AboutImage";
import AboutSinceSection from "./AboutSinceSection";
import StatsSection from "./StatsSection";
import MissionVisionSection from "./MissionVisionSection";
import WhyChooseUs from "./WhyChooseUs";
import CTASection from "../Home/CTASection";
const About = ()=>{
    return(
        <div>
            <IntroAbout />
            <AboutImage/>
            <AboutSinceSection/>
            <StatsSection/>
            <MissionVisionSection/>
            <WhyChooseUs/>
            <CTASection/>
          
        </div>
    )
}

export default About