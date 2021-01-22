import React from 'react'
import "./Home.css"
import Product from "../src/profile/Product"
import productOne,  { iconsTwo } from './ProductIcons'




function Home() {
    return (

        
        <div className="home ">
            <div className="home__container ">
                <img  className="home__image" src="https://media.giphy.com/media/70avjXLCYWf5ZoJTWY/giphy.gif"/>
            

            <div className="home__row row mx-auto">
                
                <div className="home__col">
                <Product  
                id={1}
                header="PetFinders"
                title="Fully responcive ReactJs webapp that helps users to sell or buy a furry friend"
                price={29.99}
                icons={productOne}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1610911651/Untitled_aghpzh.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1610058295/video_dalpks.mp4"
                demolink="https://petfinders.kristinafrants.vercel.app/"

                description="A fullstack MVP webapp build from scratch with use of ReactJs Hooks for front-end and Python-Flask for back-end with SQLAlchemy BD. 
                The boilerplate is build with updated features for Hooks and webpack module bundlers."
               
                description1= "PetFinders webapp allows users to Post unlimited adds on the feed for selling, buing or adopting a pet purposes. User have different options when logged in or just visiting app as guest."
                
                description2= "A logged in user can fill in a full pet profile with photo and user's contact info, has his own dashbord where he/she can delete an add , post the add in the feed and adjust more info if necessary. A Quick Add button is avaliable only for non-logged in users who wants too post a short add. All adds have features such as Connect an owner to request more info about the pet or his/her contacts via email, or send a message directly to the owner phone."
                
                description3="The back-end written in Python offers a lot of options including the ability to check logs, see posts, user information and much more.
                SQLAlchemy DB gives an easy acces to all nesessary information directly in the terminal and allows to update tables quickly if needed"
                
                login="margo@gmail.com" 
                pass="12345"
                rating={5}
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  ReactJs
                💻  PythonFlask  
                💻  SQLAlchemy
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Twillio  
                💻  FontAwesome
                💻  WebPack"
                

                />
                 </div> 

                <div className="home__col ">
                <Product
                id={2}
                header="Star Wars Clone"
                title="Epic Saga Fanpage created with React for the Front End with RESTful API using Star Wars Database "
                demolink="https://star-wars-api-seven.now.sh/"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1610058295/video_dalpks.mp4"
                price={19.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1610911651/Untitled_aghpzh.png"
                rating={4}
                icons={iconsTwo}
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
