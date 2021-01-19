import React from 'react'
import {useStateValue} from "./StateProvider";
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import "./DisplayEach.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopHouse, faAddressCard, faLaptopCode, faSitemap, faAd, faPaw } from '@fortawesome/free-solid-svg-icons';



function DisplayEach({id, image, title, login, demolink, description, price, rating, header, hideButton, play}) {

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
        <iframe width="96%" height="290px" src={play}> 
        </iframe>
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
        <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faLaptopCode } className="roller__icon mt-2"/><br/>
            <small className="mb-1">Responcive design</small>
            </div>
            <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faAddressCard} className="roller__icon mt-2"/><br/>
            <small className="mb-1">User Dashboard</small>
            </div>
            <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faLaptopHouse} className="roller__icon mt-2"/><br/>
            <small className="mb-1">Landing Page</small>
            </div>
            <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faSitemap} className="roller__icon mt-2"/><br/>
            <small className="mb-1">SQLAlchemy DB</small>
            </div>
            <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faAd} className="roller__icon mt-2"/><br/>
            <small className="mb-1">Quick Post</small>
            </div>
            <div className="displayEach__icons col">
            <FontAwesomeIcon icon={faPaw} className="roller__icon mt-2"/><br/>
            <small className="mb-1">Pet Profile</small>
            </div>
        </div>
    </div>  
</div>
    )
}

export default DisplayEach
