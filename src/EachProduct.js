import React from 'react'
import {useStateValue} from "./StateProvider";
import Product from "./Product"


function EachProduct({id, image, title, price, rating}) {
    const [{eachProd}, dispatch] = useStateValue()



    return (
        <div className="checkoutProduct">
            <p>{title}</p>
                {eachProd.map(item =>(
                        <Product
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

   
    </div>
    )}

export default EachProduct
