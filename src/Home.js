import React from 'react'
import "./Home.css"
import Product from "../src/profile/Product"
import YouTube from "@u-wave/react-youtube";
import ReactPlayer from 'react-player'


function Home() {
    return (

        
        <div className="home ">
            <div className="home__container ">
           {/* <div className="youtube__video">
            <YouTube autoplay muted  width="100%" height="35px"     
            video="rhFhynQCAqs"  
            controls="0" showCaptions="false" /></div>  */}
            {/* <iframe width="100%" height="500px" src="https://res.cloudinary.com/div5hqtbd/video/upload/v1610058335/video_qfrjh3.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img  className="home__image" src="https://media.giphy.com/media/70avjXLCYWf5ZoJTWY/giphy.gif"/>
            

            <div className="home__row row mx-auto">
                
                <div className="home__col">
                <Product  
                id={1}
                title="Your product description goes here"
                price={29.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1610674166/petfinders__img_mtoy7g.jpg"
                rating={5}
                />
                 </div> 

                <div className="home__col ">
                <Product
                id={2}
                title="Your product description goes here"
                price={19.99}
                image="https://image.freepik.com/free-photo/close-up-body-butter-recipient_23-2148542975.jpg"
                rating={4}
                />
                </div>  
            
            </div> 

                {/* Products row2 */}
            <div className="home__row row mx-auto">

                <div className="home__col2">
                <Product 
                id={3}
                title="Your product description goes here"
                price={25.99}
                image="https://image.freepik.com/free-photo/close-up-body-butter-bottle_23-2148543024.jpg"
                rating={3}
                />
                </div>

                <div className="home__col2">
                <Product 
                id={4}
                title="Your product description goes here"
                price={17.29}
                image="https://image.freepik.com/free-photo/rose-oils-spa-treatment-arrangement-cosmetics_23-2148645500.jpg"
                rating={4}
                />
                </div>
                
                <div className="home__col2">
                <Product
                id={5}
                title="Your product description goes here"
                price={18.55}
                image="https://image.freepik.com/free-photo/lavender-flowers-bottle-petals-with-perfume_23-2148645608.jpg"
                rating={4}
                />
                </div>
          </div> 

         
                {/* Products row3 */}
            <div className="home__row3 ">
                <div className="home__col3">
                <Product
                id={6}
                title="Your product description goes here"
                price={28.57}
                image="https://image.freepik.com/free-photo/natural-cosmetics_23-2148574903.jpg"
                rating={5}
                />
                </div>
            </div>
           

            </div>
        </div>
    )
}

export default Home
