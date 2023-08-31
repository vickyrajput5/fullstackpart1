import React from 'react'

export const TASK3 = () => {
    const course = 'Data'
    const part1 = {
        name: 'Waqar',
        age:23
      }
      const part2 = {
        name: 'abrar',
        age:23
      }
      const part3 = {
        name: 'anwaar',
        age:23
      }
  return (
    <div>
       
        <h1>{course}</h1>
        <p> {part1.name} and {part1.age} </p>
        <p>{part2.name} and {part2.age}</p>
        <p>{part3.name} and {part3.age}</p>
    </div>
  )
}
