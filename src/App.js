import './App.css';
import Logo from './images/freecodecamp-logo.png'
import Button from './components/Button';

function App() {

  /* Funciones: Se asigna segun event */

  const addClick = () => {
    console.log('Click')
  }

  const resetCounter = () => {
    console.log('Reset')
  }

  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img className='freecodecamp-logo' 
        src={Logo} 
        alt='freecodecamp-logo' />
      </div>
      <div className="container-main">
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
