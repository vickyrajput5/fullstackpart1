import React from 'react'
import Header from './component/Header'
import Content from './component/Content'

export const Task4 = () => {
    const course = 'Employee biodata'
    const parts = [
        {
            name: 'Muhammad Waqar',
            age: 24
          },
           {
            name: 'Ahmad Musaf',
            age:25
          },
          {
            name: 'Abubakar',
            age:27
          },
          {
            name: 'Waqas',
            age:30
          }
    ]
  return (
    <div>
        <h1>{course}</h1>
        <table>
            <thead>
                <th>Parts</th>
                <th>Exercises</th>
            </thead>
            <tbody>
                {
                    parts.map(part=>(
                        <tr key={part.name}>
                            <td>{part.name}</td>
                            <td>{part.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Header course={course}/>
        <Content parts={parts} />
    </div>
  )
}
