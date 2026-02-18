import React from "react";
import HeroSection from "./HeroSection";
import AboutCompany from "./AboutCompany";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";
import Industries from "./Industries";
import ExpertInsights from "./ExpertInsights";
import CTASection from "./CTASection";
const Home = ()=>{
    return(
       <>   
       <HeroSection />
       <AboutCompany />
       <ServicesSection/>
       <Testimonials/>
       <Industries/>
       <ExpertInsights/>
       <CTASection/>
       </>
    )   
}

export default Home