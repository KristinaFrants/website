

import React from "react";
import { Parallax} from "react-parallax";


const insideStyles = {

  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://image.freepik.com/free-vector/abstract-watercolor-texture-background-vector_1055-9115.jpg";

const ParallaxContainer = () => (
  <div style={{width:'100%'}}>
    <Parallax bgImage={image1} strength={200}>
    <div style={{ height: '450px', border: "15px solid white", borderRadius: "5px" }} />
        <div style={insideStyles}>HTML inside the parallax</div>
      
    </Parallax>
    {/* <h2>| | |</h2> */}
    <br/>
    <br/>
    <br/>
  </div>
);
export default ParallaxContainer

