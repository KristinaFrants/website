import React from 'react'
import {useStateValue} from "./StateProvider";
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import "./DisplayEach.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopHouse, faAddressCard, faLaptopCode, faSitemap, faAd, faPaw } from '@fortawesome/free-solid-svg-icons';
import productOne from "./ProductIcons"


function DisplayEach({id, icons, image, title, login, demolink, description, price, rating, header, hideButton, play}) {

    const [{ eachProd }, dispatch] = useStateValue();
    const history = useHistory();

    const removeEach =() => {
        //delite items from the basket
        dispatch({
            type: 'EMPTY_PRODUCT',
            id: id,
        }) 
        history.replace('/home')  
     }

    function showDemo() {
        const x = document.getElementById("demo");
            if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            }
    }

    return (
        <div className="row">
            <div className="displayEach__video col-4">
                <iframe width="96%" height="290px" src={play}></iframe>
                <div>
                    <Button onClick={showDemo} variant="dark" size="sm">Demo Login</Button>
                    <p className="mt-3" style={{display:"none"}} id="demo">{login}</p>
                </div>
            </div>

            <div className="displayEach col-7 ml-2 mr-4">
            <div className="displayEach__info ">
                <div className="displayEach__content mt-4 mb-4 ml-3">
                <h2 >{header}</h2>
                <p >{title}</p>
                <p >{description}</p>
                <a href={demolink}>Click</a>
                </div>
            </div>

            <div className="row ml-1 mr-1">
            {icons.map((img, index) => (
                <div key={index} className="displayEach__icons col">
                    <FontAwesomeIcon  className="roller__icon mt-2 " icon={img.IconDefinition}/><br/>
                    <small className="mb-1">{img.iconName}</small>
                </div>
            ))}
                  
                </div>
            </div>  
        </div>
    )
}

export default DisplayEach