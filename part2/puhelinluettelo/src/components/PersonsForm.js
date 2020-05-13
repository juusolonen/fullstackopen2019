import React from 'react'
import Axios from 'axios'
import personService from '../services/personService'


const PersonsForm = ({persons, newName, setNewName, newNumber, setNewNumber, setPersons}) => {

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
         if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with the new one?`)){
           personService.updatePerson(nameFound, newPerson)
            .then((response) => 
            personService
            .getAllPersons()
              .then(allPersons => {
                setPersons(allPersons)
              }))
         }
          setNewName('');
          setNewNumber('');
        }else {
          personService.addPerson(newPerson)
            .then((addedPerson)=> {
              setPersons(persons.concat(addedPerson));
              setNewName('');
              setNewNumber('');
            })

        }
      }
    

    return (
        <form onSubmit={addNew}>
        <div> name: <input onChange={handleNewName} value={newName} /> </div>
        <div> number: <input onChange={handleNewNumber} value={newNumber} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}


export default PersonsForm