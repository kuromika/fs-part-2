
export const Form = ({handleSubmit, newName, handleNameInput, newNumber, handleNumberInput}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}