import React from 'react'
import './Button.css'
const Button = ({btn,index}) => {
  return (
    <div>
        <button key={index} className="middle-section-1-btn">
              {btn}
            </button>
    </div>
  )
}

export default Button