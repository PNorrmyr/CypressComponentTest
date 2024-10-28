import React from 'react'

function Input({inputName, setInputName}) {

    const handleChange = (event) => {
        setInputName(event.target.value);
    }

  return (
    <div>
        <input type="text" placeholder="Namn" className = 'input-name' value={inputName} onChange={handleChange}>

        </input>
      
    </div>
  )
}

export default Input
