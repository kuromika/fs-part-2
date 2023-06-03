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

export default Course;