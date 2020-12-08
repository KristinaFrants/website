import React from 'react'
import "./DesignCards.css"

function DesignCards() {
    return (
        <div>
            <div className="recipeContent__container row">
			<div className="recipeContent__card col">
				<div className="face face1">
					<div className="recipeContent__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
						<h3>Design</h3>
					</div>
				</div>

				<div className="face face2">
					<div className="recipeContent__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
							veritatis provident at.
						</p>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="recipeContent__card recipeContent__card2 col">
				<div className="face face1">
					<div className="recipeContent__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
						<h3>Code</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="recipeContent__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
							veritatis provident at.
						</p>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
			<div className="recipeContent__card recipeContent__card3 col">
				<div className="face face1">
					<div className="recipeContent__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
						<h3>Launch</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="recipeContent__content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste
							veritatis provident at.
						</p>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default DesignCards
