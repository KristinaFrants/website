import React from 'react'
import {useStateValue} from "./StateProvider";
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom"

function DisplayEach({id, image, title, price, rating, hideButton}) {

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

    return (
        <div>
             <div className="checkoutProduct">
        
        <img className="checkoutProduct__image" src={image}/>
        
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
            <Button onClick={removeEach} variant="dark" size="sm">Back</Button>
            )}
            </div>
    </div>
    
        </div>
    )
}

export default DisplayEach
