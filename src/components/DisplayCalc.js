import React from "react";
import '../css/DisplayCalc.css'
let DisplayCalc =(props)=>(
  <div
   className={'input'}
   onClick={props.manageClick}
  >
    {props.input}
  </div>
)

export default DisplayCalc