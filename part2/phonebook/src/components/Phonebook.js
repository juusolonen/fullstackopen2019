import React from 'react'
import Person from './Person'

const Phonebook = ({persons, showAll, filterValue}) => {

    const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterValue))

    

    const names = () =>    personsToShow.map(person =>
      
        <Person 
       key={person.name}
        person={person}
        />
        )
    return(
        <div>
        
        <div>{names()}</div>
        </div>
      
    )
}



export default Phonebook