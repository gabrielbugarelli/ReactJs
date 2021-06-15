import './style.css'
import React from 'react';

export default function Button({text, handleClick, disabled}){
  return(
    <button 
      className='button' 
      onClick={handleClick}
      disabled={disabled}
      > 
      {text} 
    </button>
  )
}