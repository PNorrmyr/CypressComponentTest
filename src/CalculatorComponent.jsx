import React, { useState } from 'react'

function CalculatorComponent({result, setResult}) {
    const [inputNumber, setInputNumber] = useState('');


    function clearInput(){
        setInputNumber('');
    }

    const handleInput = (event) => {
        setInputNumber(event.target.value);
    }
    function handleAdd () {
        setResult(result + Number(inputNumber));
        clearInput();
    }
    function handleSub () {
        setResult(result - Number(inputNumber));
        clearInput();
    }
    function handleMulti () {
        if(result == 0) {
            setResult(Number(inputNumber))
            clearInput();
        } else {
            setResult(result * Number(inputNumber));
            clearInput();
        }
    }
    function handleDiv () {
        if(inputNumber === 0) {
            alert('Cannot divide by 0');
            return;
        } else if (result == 0) {
            setResult(Number(inputNumber))
            clearInput();
        } else {
            setResult(result / Number(inputNumber));
            clearInput();
        }
    }

    

  return (
    <div className='calc-wrapper'>
        <input type="number" className='input-display' value = {inputNumber } onChange={handleInput}/>
        <button className='add' onClick={handleAdd}>+</button>
        <button className='sub' onClick={handleSub}>-</button>
        <button className='multi' onClick={handleMulti}>x</button>
        <button className='div' onClick={handleDiv}>/</button>
        <p className='output-display'>{result}</p>
    </div>
  )
}

export default CalculatorComponent
