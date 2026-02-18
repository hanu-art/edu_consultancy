import PlacementHero from "./placement/PlacementHero";
import PlacementStrategy from "./placement/PlacementStrategy";
import PlacementOptions from "./placement/PlacementOptions";
import PlacementProcessDetailed from "./placement/PlacementProcessDetailed";
import FinalCTA from "../Contact/FinalCTA";
const JobPlacement = ()=>{
    return(
        <div>
            <PlacementHero />
            <PlacementStrategy />
            <PlacementOptions />
            <PlacementProcessDetailed />
            <FinalCTA />
        </div>
    )
}

export default JobPlacement