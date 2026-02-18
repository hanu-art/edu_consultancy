import React from "react";
import CollegeHero from "./college/CollegeHero";
import CollegeOverview from "./college/CollegeOverview";
import CollegeOfferings from "./college/CollegeOfferings";
import CollegeProcess from "./college/CollegeProcess";
import FinalCTA from "../Contact/FinalCTA";
import CollegeInstitutions from "./college/CollegeInstitutions";
const College = ()=>{
    return(
        <div>
            <CollegeHero />
            <CollegeOverview />
            <CollegeInstitutions />
            <CollegeOfferings />
            <CollegeProcess />
            <FinalCTA />

        </div>
    )
}

export default College