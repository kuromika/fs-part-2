

const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name}></Header>
      {course.parts.map((part) => {
        return(<Part name={part.name} key={part.id} exercises={part.exercises}></Part>)
      })}
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


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App