import { useState , useRef } from 'react';
import './App.css';



function App() {

  const [name , setName] = useState('Steve')

  const refElement = useRef('')
  console.log(refElement)

  const clear = ()=>{
    setName('')
    refElement.current.focus()
  }

  const changeColor = ()=>{
     refElement.current.style.color = 'red'
  }

  return (
    <>
     <h1>useRef</h1>
    <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={clear}>Clear</button>
     <button onClick={changeColor}>Change Color</button>
    </>   
  );
}


export default App;