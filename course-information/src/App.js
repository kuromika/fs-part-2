

const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name}></Header>
      {course.parts.map((part) => {
        return(<Part name={part.name} key={part.id} exercises={part.exercises}></Part>)
      })}
      <Total parts={course.parts}></Total>
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({ parts }) => {
  return <p>{parts.reduce((accumulator, current) => {
    return accumulator + current.exercises;
  }, 0 )}</p>
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {courses.map((course) => {
        return <Course course={course} key={course.id}></Course>
      })}
    </div>
  )
}

export default App