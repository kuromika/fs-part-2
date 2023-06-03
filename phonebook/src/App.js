import { useState } from 'react'
import { Form } from './components/Form'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }));
    setNewName('');
    setNewNumber('');
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterInput = (event) => {
    setFilter(event.target.value);
  }

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterInput={handleFilterInput}></Filter>
      <h2>add a new</h2>
      <Form handleSubmit={handleSubmit} handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput} newName={newName} newNumber={newNumber}>
      </Form>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}></Persons>
    </div>
  )
}

export default App