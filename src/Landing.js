import React from 'react'
import { LandingCard } from "./LandingCard";
import LandingServices from "./LandingServices";
import ParallaxContainer from "./Parallax"
import "./Landing.css"
import ContactForm from './ContactForm';
import DesignCards from './DesignCards';


function Landing() {
    return (
        <div className="row m-0" >
        <ParallaxContainer/>
            <div>
                <div> <LandingCard className=" mb-5" /></div>
                <div> <DesignCards></DesignCards></div>
                <div> <LandingServices /></div>
                <div> <ContactForm/></div>
            </div>
        </div>
    )
}

export default Landing
