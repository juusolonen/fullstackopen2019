import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0501234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const nameFound = (persons.find(person => person.name === newPerson.name))

    if(nameFound) {
      window.alert(`${newPerson.name} is already added to the phonebook`)
      setNewName('');
      setNewNumber('');
    }else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div> name: <input onChange={handleNewName} value={newName} /> </div>
        <div> number: <input onChange={handleNewNumber} value={newNumber} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>)}
      
    </div>
    
  )

}

export default App