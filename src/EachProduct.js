import React from 'react'
import {useStateValue} from "./StateProvider";
import DisplayEach from "./DisplayEach"


function EachProduct({id, image, icons, title, price, rating,hideButton}) {
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
                        description1={item.description1}
                        description2={item.description2}
                        description3={item.description3}
                        features={item.features}
                        login={item.login}
                        icons={item.icons}
                        pass={item.pass}
                    />
                ))}
                    
    </div>
    )}

export default EachProduct
