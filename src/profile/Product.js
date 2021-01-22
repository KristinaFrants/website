import React from 'react'
import "./Product.css";
import { Button } from 'react-bootstrap';
import {useStateValue} from "../StateProvider";
import { Link } from 'react-router-dom'

function Product({id, title, icons, image, price, rating,header, play,description,demolink,login}) {
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    const addProd=()=>{
        
        dispatch(
            {
            type: 'SHOW_PRODUCT',
            item: {
                id: id,
                title: title,
                image: image,
                icons: icons,
                price: price,
                rating: rating,
                header:header,
                play:play,
                demolink:demolink,
                description:description,
                login:login,
            },
        })
    }
    return (
    <Link onClick={addProd} to={"/eachProduct/" + id} style={{textDecoration:"none"}}>
        <div className="product">
           
            <img src={image}/> 
            {/* <Button onClick={addToBasket} variant="dark" size="sm">Add to Basket</Button> */}
            {/* <Link onClick={addProd} to={"/eachProduct/" + id}>Show</Link> */}
            <div className="product__info">
                <h3>{header}</h3>
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>   
        </div> </Link>  
    )
}

export default Product
