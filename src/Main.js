import React, { useState } from 'react'
import "./Main.css"


function Main() {
  const[count,setCount] = useState(0)
  function countPlus(){
    setCount(count+1)
  }
  function countMinus(){
    setCount(count-1)
  }
  function countReset(){
    setCount(0)
  }
  return (
    <div className="parent">
          <div className="main">
            <h1 className="head">{count}</h1>
            <div className="btn">
                <button onClick={countPlus}>Increment</button>
                <button onClick={countMinus}>Decrement</button>
                <button onClick={countReset}>Reset</button>
            </div>
          </div>
    </div>
  )
}

export default Main