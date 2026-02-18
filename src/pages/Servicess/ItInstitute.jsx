import ITInternshipHero from "./it/ITInternshipHero";
import InternshipOverview from "./it/InternshipOverview ";
import InternshipFinalCTA from "./it/InternshipFinalCTA";
import FinalCTA from "../Contact/FinalCTA";
import InternshipTechStack from "./it/InternshipTechStack";
const ItInstitute = ()=>{
    return(
        <div>
            <ITInternshipHero />
            <InternshipOverview />
            <InternshipTechStack />
            <InternshipFinalCTA />
            <FinalCTA />
        </div>
    )
}

export default ItInstitute