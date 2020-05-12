import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService
    .getAllPersons()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} persons={persons} setPersons={setPersons} />
      <h2>add a new</h2>
      <PersonsForm persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons}/>
      
    </div>
    
  )

}

export default App