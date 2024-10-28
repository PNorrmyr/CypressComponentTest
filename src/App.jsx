import { useState } from 'react'
import './App.css'
import Input from './Input'
import SubmitButton from './SubmitButton'
import CalculatorComponent from './CalculatorComponent'

function App() {
  const [nameToShow, setNameToShow] = useState('')
  const [inputName, setInputName] = useState('')
  const [result, setResult] = useState(0);

  function handleButtonClick(){
    if(nameToShow) {
      setNameToShow('');
      setInputName('');
    } else {
      setNameToShow(inputName)
    }
  }

  return (
   <div>
      {nameToShow && <p className='displayedName'>{nameToShow}</p>}

      <Input inputName = { inputName } setInputName = { setInputName }/>
      <SubmitButton onClick ={handleButtonClick} buttonName = {nameToShow ? 'Logga Ut' : 'Spara Namn'} />
      <CalculatorComponent result = {result} setResult = {setResult}/>
   </div>

  )
}

export default App
