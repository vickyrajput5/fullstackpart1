export const Task5 = () => {
    const course = {
      name: 'Student Details',
      parts: [
        {
            name: 'Waqar',
            age:23,
            education:"BSIT"
        },
        {
            name: 'anwaar',
            age:33,
            education:"BSCS"
        },
        {
            name: 'Waqas',
            age:30,
            education:"BSSE"
        },
        {
            name: 'abrar',
            age:13,
            education:"10th"
        },
        {
            name: 'Waqar',
            age:23,
            education:"BSCE"
        },
        {
            name: 'Fateh',
            age:3,
            education:"BSIT"
        }
      ]
    };
  
    return (
      <div>
        <h1>{course.name}</h1>
        <table>
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Age</th>
              <th className="table-header">Education</th>
            </tr>
          </thead>
          <tbody>
            {course.parts.map(part => (
              <tr key={part.name} className="table-row">
                <td>{part.name}</td>
                <td>{part.age}</td>
                <td>{part.education}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  