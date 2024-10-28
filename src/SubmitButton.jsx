import React, { useState } from 'react'

function SubmitButton({onClick, buttonName}) {
    

  return (
    <button onClick = {onClick} className='name-button'>
      {buttonName}
    </button>
  )
}

export default SubmitButton
