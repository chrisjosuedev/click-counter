import './App.css';
import Logo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';

/* Hook */
import { useState } from 'react'

function App() {

  // setNumClick Function
  const [numClick, setNumClicks] = useState(0)

  /* Funciones: Se asigna segun event */

  const addClick = () => {
    setNumClicks(numClick + 1)
  }

  const resetCounter = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img className='freecodecamp-logo' 
        src={Logo} 
        alt='freecodecamp-logo' />
      </div>
      <div className="container-main">
       <Counter numClick={numClick} /> 
       <Button 
        title="Count"
        isClickButton={true}
        handleClick={addClick} /> 
        <Button 
        title="Reset"
        isClickButton={false}
        handleClick={resetCounter} /> 
      </div>
    </div>
  );
}

export default App;
