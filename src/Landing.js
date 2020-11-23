import React from 'react'
import { LandingCard } from "./LandingCard";
import LandingServices from "./LandingServices";
import ParallaxContainer from "./Parallax"
import "./Landing.css"


function Landing() {
    return (
        <div className="row m-0" >
        <ParallaxContainer/>
            <div>
           <div> <LandingCard className=" mb-5" /></div>
            <div> <LandingServices className=""/></div>
            </div>
        </div>
    
    )
}

export default Landing
