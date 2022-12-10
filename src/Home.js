import React from 'react'
import "./Home.css"
import Product from "../src/profile/Product"
import productOne,  { iconsTwo, iconsTree } from './ProductIcons'




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
                title="Fully responcive ReactJs WebApp that helps users to sell or buy a furry friend"
                price={29.99}
                icons={productOne}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1610911651/Untitled_aghpzh.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1611281815/Petfinders-video_1-21-2021_9-10-13_PM_hs9xvu.mp4"
                demolink="https://petfinders.kristinafrants.vercel.app/"
                description="A fullstack MVP webapp build from scratch with use of ReactJs Hooks for front-end and Python-Flask for back-end with SQLAlchemy BD. 
                The boilerplate is build with updated features for Hooks and webpack module bundlers."
                description1= "PetFinders webapp allows users to Post unlimited adds on the feed for selling, buing or adopting a pet purposes. User have different options when logged in or just visiting app as guest."
                description2= "A logged in user can fill in a full pet profile with photo and user's contact info, has his own dashbord where he/she can delete an add , post the add in the feed and adjust more info if necessary. A Quick Add button is avaliable only for non-logged in users who wants too post a short add. All adds have features such as Connect an owner to request more info about the pet or his/her contacts via email, or send a message directly to the owner phone." 
                description3="The back-end written in Python offers a lot of options including the ability to check logs, see posts, user information and much more.
                SQLAlchemy DB gives an easy acces to all nesessary information directly in the terminal and allows to update tables quickly if needed."
                login="margo@gmail.com" 
                pass="12345"
                rating={5}
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  PythonFlask  
                💻  SQLAlchemy
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON 
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Twillio  
                💻  FontAwesome
                💻  WebPack
                💻  RESTfulAPI
                💻  Heroku"
                />
                 </div> 

                <div className="home__col ">
                <Product
                id={2}
                header="The Simple Veganista"
                title="Food Blog Post in ReactJs for posting Vegan Recipes and promote CookBooks"
                price={19.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1611279100/food_-blog_wdf6nx.png"
                demolink="https://food-blog-post.now.sh/"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1611361465/food-blogmp4_1-22-2021_2-03-50_PM_ynlxwk.mp4"
                description="A fullstack Blog Post build from scratch written in ReactJs with SQLAlchemy DB created to promote amazon/kindle books. "
                description1= "Simple Veganista blog allows users to Post unlimited ammount of recipes on the feed as a guest without singin in. You can share any recipe, upload recipe photo, cooking tips, description etc."
                description2= "Admin side can controll Posts, Delete or leave the recipe published in the feed. Blog has the features as uplouding recipe videos, show sample of PDF book, share or link the information about the books and give advices in regards to clean eating."
                description3="The back-end written in Python-Flask offers a lot of options including the ability to update recipes, and see user email and much more.
                SQLAlchemy DB gives an easy acces to all nesessary information directly in the terminal and allows to sort or update tables quickly if needed."
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  PythonFlask  
                💻  SQLAlchemy
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Twillio  
                💻  FontAwesome
                💻  WebPack
                💻  RESTfulAPI
                💻  YouTube
                💻  PDF
                💻  Heroku"
                login="None" 
                pass="None"
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
                header="E-Commerce"
                title="ReactJs e-commerce WebApp like Amazon with realtime DB"
                price={25.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1611370627/amazonscreen_eocopd.png"
                rating={3}
                demolink="https://clone-8625e.web.app/"
                icons={iconsTree}
                login="kristy@test.com" 
                pass="123456"
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS   
                💻  FontAwesome
                💻  Stripe
                💻  RESTfulAPI
                💻  Firebase
                💻  Firebase Functions
                💻  Real Time DB
                💻  Reducer
                "
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
