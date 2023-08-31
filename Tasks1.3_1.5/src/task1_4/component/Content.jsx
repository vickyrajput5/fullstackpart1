
const Content = ({parts}) => {

  return (
    <div>
      <p>
      {parts.map(part=>(
        <div  key={part.name}>
        <p>my name is {part.name } </p>
        <p> my age is {part.age}</p>
        </div>
      ))}
      </p>
      
    </div>
  )
}

export default Content
