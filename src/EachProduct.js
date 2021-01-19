import React from 'react'
import {useStateValue} from "./StateProvider";
import DisplayEach from "./DisplayEach"


function EachProduct({id, image, title, price, rating,hideButton}) {
    const [{eachProd}, dispatch] = useStateValue()



    return (
        <div className="EachProduct">

            {eachProd.slice(-1).map(item =>(
                    
                    <DisplayEach
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        header={item.header}
                        play={item.play}
                        demolink={item.demolink}
                        description={item.description}
                        login={item.login}
                    />
                ))}
                    
    </div>
    )}

export default EachProduct
