import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    personService
    .getAllPersons()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])


  return (
    <div style={{width: "50%", margin: "auto"}}>
      <h2>Phonebook</h2>
      <Message message={message}/>
      <Filter filter={filter} setFilter={setFilter} persons={persons} setPersons={setPersons} />
      <h2>add a new</h2>
      <PersonsForm message={message} persons={persons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} setMessage={setMessage} />
      <h2>Numbers</h2>
      <Persons setMessage={setMessage} persons={persons} setPersons={setPersons}/>
      
    </div>
    
  )

}

export default App