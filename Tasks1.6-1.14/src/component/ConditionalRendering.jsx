import { useState } from "react"

const History = (props) => {
  if(props.allClicks.length === 0){
    return (
        <div>
            <p>Please press button for using this App</p>
        </div>
    )
  }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
 export const ConditionalRendering = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
  
    return (
      <div>
        {left}
  
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    )
  }
 