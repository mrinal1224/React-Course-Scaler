import React, { useEffect } from 'react'

import {useState } from 'react'

function Ue1() {

    const [count , setCount] = useState(0)
    const [text , setText] = useState('')


   let incrementCount =()=>{
        setCount(count+1)
   }

   let handleChange = (e)=>{
      setText(e.target.value)
   }


   // syntax of useEffect
   // Component Mounting & Componenet Update
   // useEffect(()=>{
   //    console.log('use Effect Runs')
   //    document.title = `button clicked for ${count} times`
   // })

 // Component Mounting
   useEffect(()=>{
      console.log('use Effect Runs')
      document.title = `button clicked for ${count} times`
   } ,[text])





  return (
    <div>
        <h1>This is my Count value : {count} </h1>
        <input onChange={handleChange} type='text' value={text}></input>
        <h2>{text}</h2>
        <button onClick={incrementCount}>Increment</button>

    </div>
  )
}

export default Ue1