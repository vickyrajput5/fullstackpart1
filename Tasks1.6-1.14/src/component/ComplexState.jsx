import React, { useState } from 'react'

const ComplexState = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total , setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
  const updateLeft =  left + 1
  setLeft(updateLeft)
   setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight =  right + 1;
    setRight(updateRight)
   setTotal( left + updateRight)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>{total}</p>
    </div>
  )
}

export default ComplexState
