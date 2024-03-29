// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [counter, setCounter] = useState(parseInt(localStorage.getItem('amount')))
  const updateLocalstorage = (val)=>{
    localStorage.setItem("amount", parseInt(val) + 1)
  }
  return (
    <div className="App">
      <h1 className="counter">{counter}</h1>
      <button onClick={()=>{setCounter(counter+1) 
        updateLocalstorage(counter)}} style={{margin: "10px"}}>Add</button>
      <button onClick={()=>{setCounter(counter-1)
      updateLocalstorage(counter)}} style={{margin: "10px"}}>Subtract</button>
      <button onClick={()=>{setCounter(0)
      updateLocalstorage(counter)}}>Reset</button>

      <Footer/>
    </div>
  );
}

export default App;
