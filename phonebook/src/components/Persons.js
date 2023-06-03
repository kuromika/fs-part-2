
export const Persons = ({ persons, handleDelete }) => {

  const handleClick = (id) => {
    return (event) => {
      handleDelete(id);
    }
  }


  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={person.id}>{person.name} {person.number}
            <button onClick={handleClick(person.id)}>delete</button>
          </p>
        )
      })}
    </div>
  )
}