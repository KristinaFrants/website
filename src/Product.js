import React from 'react'
import "./Product.css";
import { Button } from 'react-bootstrap';
import {useStateValue} from "./StateProvider";
import { Link } from 'react-router-dom'

function Product({id, title, image, price, rating}) {
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
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
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
            
            <img src={image}/>
            <Button onClick={addToBasket} variant="dark" size="sm">Add to Basket</Button>
            <Link onClick={addProd} to={"/eachProduct/" + id}>Show</Link>
            
        </div>
    )
}

export default Product
