import React, { useState } from 'react'
import Phonebook from './Phonebook'
import Form from './Form'
import Filter from './Filter'

const App = () => {
    const [ persons, setPersons] = useState([
      { name: 'Arto Hellas',
        number: '040-1234567'
    },
    { name: 'Jorma Uotinen',
      number: '050-7654321'
    },
    { name: 'Juuso Solonen',
      number: '050-0070007'

    }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [filterValue, setFilter] = useState('')

    //showAll is only needed when rendering the page first time
    //after filtering is used, showAll will stay false until page reloaded


    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
       const test = persons.map(person => (newPerson.name === person.name))
       if (test.includes(true)){
           window.alert(`${newName} is already added to phonebook`)
       }else{
       setPersons(persons.concat(newPerson))
       }
       setNewName('')
       setNewNumber('')
    }
    const handleNewName = (event) => {
        setNewName(event.target.value)
    }
    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilter = (event) => {
        setFilter(event.target.value.toLowerCase())
        setShowAll(true)
        if(filterValue) {
          setShowAll(false)
        }
        
    }
 
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Filter handleFilter={handleFilter} />
        <h2>Add a new</h2>
        <Form addPerson={addPerson} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>
        <h2>Numbers</h2>
        <Phonebook persons={persons} showAll={showAll} filterValue={filterValue}/>        
      </div>
    )
  }
  
  export default App