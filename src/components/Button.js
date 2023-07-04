import React from 'react';
import '../css/buttonStyles.css'
function Button(props) {
  const isOperator = (dataEntry)=>{
    return isNaN(dataEntry) && (dataEntry !== '.') && (dataEntry !== '=');
  }
  return (
      <div
        className={`styleButton ${isOperator(props.children)? 'styleOperator': ''}`.trimEnd('')}
        onClick={()=> props.manageClick(props.children)}
      >
        {props.children}
      </div>
  )
}

export default Button