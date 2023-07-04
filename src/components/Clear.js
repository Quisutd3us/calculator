import React from "react";
import '../css/buttonClear.css'

function ClearCalc(props) {
  return (
      <div
          className={'styleBtnClear'}
          onClick={props.manageClick}
      >
        {props.children}
      </div>
  )
}

export default ClearCalc