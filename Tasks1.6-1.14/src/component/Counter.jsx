import React, { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement =  () =>{
     
            setCount(count -  1)
       
    }

  return (
    <div>
        
        <div>{count}</div>

        <button onClick={increment}>
            plus
        </button>
        <button onClick={decrement} disabled={count === 0} >
            subtract
        </button>
        <button onClick={() => setCount(0)} > reset</button>
    </div>
  )
}
