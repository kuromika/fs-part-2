import { useState, useEffect } from 'react'
import { Form } from './components/Form'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import {createPerson, updatePerson, getAll, deletePerson} from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response.data);
    })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    const oldPerson = persons.find((person) => person.name === newName);
    if (oldPerson) {
      const confirmation = window.confirm
        (`${newName} is already in the phone book, replace old number with new one?`);
      if (!confirmation) {
        return;
      }
      updatePerson(oldPerson.id, {
        ...oldPerson,
        number: newNumber
      }).then((response) => {
        setPersons(persons.map((person) => person.id === response.data.id ? response.data : person))
      })
    } else {
        createPerson({
        name: newName,
        number: newNumber
      }).then((response) => {
        setPersons([...persons, response.data]);
      })
    }
    
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

  const handlePersonDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    const confirmation = window.confirm(`Delete ${person.name}?`);
    if (!confirmation) {
      return;
    }
    deletePerson(id).then((response) => {
      setPersons([...persons.filter((person) => person.id !== id)]);
    })
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
      <Persons persons={filteredPersons}
        handleDelete={handlePersonDelete}
      ></Persons>
    </div>
  )
}

export default App