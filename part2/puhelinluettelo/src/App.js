import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState(persons)

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {

    setFilter(event.target.value)
    const result = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    setFilteredPersons(result)
    console.log(result)
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
      <div>filter shown with: <input value={filter} onChange={handleFilter} /> </div>
      <h2>add a new</h2>
      <form onSubmit={addNew}>
        <div> name: <input onChange={handleNewName} value={newName} /> </div>
        <div> number: <input onChange={handleNewNumber} value={newNumber} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>)}
      
    </div>
    
  )

}

export default App