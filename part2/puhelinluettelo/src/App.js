import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    }
    const nameFound = (persons.find(person => person.name === newPerson.name))

    if(nameFound) {
      window.alert(`${newPerson.name} is already added to the phonebook`)
      setNewName('');
    }else {
      setPersons(persons.concat(newPerson));
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name}</p>)}
      
    </div>
    
  )

}

export default App