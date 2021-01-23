import React from 'react'
import LandingServicesCards from "./LandingServicesCards"
import "./LandingServices.css"


function LandingServices() {
    return (
        
        <div className="landinServices m-2">
            
            <h3 className="col mx-auto" style={{borderBottom: "3px solid black",  fontFamily: "Playfair Display, serif"}}>Team Extension</h3>
       

            <div className="landindServices__left mx-auto row">
                <br/>
                    <p className=" mt-4 col-5" style={{textAlign: "left", fontFamily: "Playfair Display, serif"}}>
                    Are you looking for developers to join your in-house team? Or maybe you need to add specific skills to your roster? 
                    Whether it’s extra manpower or top-notch specialists, you’re in good hands with Webfluencer. We’ll augment your team with the 
                    exact people you require in less than 14 days. That commitment is a point of pride for our company.
                    <br/>
                    <br/>
                        <p className=" mt-4" style={{textAlign: "left", fontFamily: "Playfair Display, serif"}}>
                        Are you looking for developers to join your in-house team? Or maybe you need to add specific skills to your roster? 
                        Whether it’s extra manpower or top-notch specialists, you’re in good hands with Webfluencer. We’ll augment your team with the 
                        exact people you require in less than 14 days. That commitment is a point of pride for our company.
                        </p>
                    </p>



                <div className="landingServices__right col mb-4"> 
                    <div className="row_landingServices__right">
                        <div className="col_landingServices__right">
                            <img src="https://image.freepik.com/free-vector/blue-gold-alcohol-ink-background_1361-2437.jpg" style={{width:"100%"}}/>
                            <img src="https://image.freepik.com/free-vector/collection-tropical-leaves_1324-119.jpg" style={{width:"100%"}}/>
                        </div>

                        <div className="col_landingServices__right">
                            <img src="https://image.freepik.com/free-vector/blue-shades-copy-space-leaves-background_23-2148707589.jpg" style={{width:"100%"}}/>
                            <img src="https://image.freepik.com/free-vector/autumn-shades-copy-space-leaves-background_23-2148707592.jpg" style={{width:"100%"}}/>
                            <img src="https://image.freepik.com/free-vector/flat-autumn-wallpaper-with-empty-space_23-2148605426.jpg" style={{width:"100%"}}/>
                        </div>

                    </div>
                </div>
            </div>
        
                <LandingServicesCards/>
        </div>

    )
}

export default LandingServices
