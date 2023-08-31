import { Task1_13 } from "./Task1_13/Task1_13"
import ComplexState from "./component/ComplexState"
import { ConditionalRendering } from "./component/ConditionalRendering"
import { Counter } from "./component/Counter"
import { Task1_6 } from "./task1-6to1-11/Taski_6"

import { Task1_12 } from "./task1_12/Task1_12"
import { Task1_14 } from "./task1_14/Task1_14"

const Hello = (props) => {

  //destructing objects
  const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age
  

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
    {/* <h1>Greetings</h1>
    <Hello name="Anwaar" age="32" />

    <br />
    <br />
    <Counter/>
    <br />
    <br />
    <ComplexState/> */}
{/* 
<ConditionalRendering/> */}

{/* 
<Task1_6/> */}
{/* 
<Task1_12/> */}

{/* <Task1_13/> */}
<Task1_14/>
    </div>
  )
}

export default App