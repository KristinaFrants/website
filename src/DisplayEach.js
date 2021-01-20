import React from 'react'
import {useStateValue} from "./StateProvider";
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import "./DisplayEach.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopHouse, faAddressCard, faLaptopCode, faSitemap, faAd, faPaw } from '@fortawesome/free-solid-svg-icons';



function DisplayEach({id, image, title, login, demolink, description, description1, description2, description3, features, price, rating, header, pass, hideButton, play}) {

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
    <iframe className="ml-1 mb-4"width="98%" height="290px" src={play}> 
    </iframe>
    <div>
    <Button className="displayEach__button" onClick={showDemo} variant="dark" size="sm">Demo Login</Button>
    <p className="mt-4" style={{display:"none"}} id="demo">
        <i>Use these credentials to login:</i><br></br><hr></hr>
        <i>Email :</i> <b>{login}</b><br></br>
        <i>Pass :</i> <b>{pass}</b>
    </p>
    </div>

    <hr></hr>
    <h5 className="ml-2">Features:</h5>
    <p style={{ 
    marginTop:"1%", padding:"2%"}}>
        {features}</p>
</div>

<div className="displayEach col-7 ml-2 mr-4">
<div className="displayEach__info ">
    <div className="displayEach__content mt-4 mb-4 ml-3">
    <h1 className="mb-3">{header}</h1>
    <h6 className="mb-4 ">{title}</h6>
    <a href={demolink}>View Demo</a>
    </div>
</div>

<div className="row ml-1 mr-1 mt-2">
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
</div><br></br>


<div>{description}</div><br></br>
<div>{description1}</div><br></br>
<div>{description2}</div><br></br>
<div>{description3}</div>
</div>




    
        </div>
    )
}

export default DisplayEach
