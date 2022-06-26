import React from "react";
import '../styles/Button.css'

// handleClick -> Recibe Valor de Funcion a asignar

function Button({ title, isClickButton, handleClick }) {
  return(
    <button
      className={ (isClickButton) ? 'button-click':'button-reset' }
      onClick={handleClick} >
      {title}
    </button>
  )
}

export default Button