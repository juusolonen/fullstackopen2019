import React from 'react'
import personService from '../services/personService'

const Persons = ({persons, setPersons}) => {

const deletePerson = (person) => {
    if(window.confirm(`Do you want to delete ${person.name} from the phonebook?`)) {
        personService.deletePerson(person.id)
        .then(() => {
            personService.getAllPersons()
            .then((allPersons) => setPersons(allPersons))
        })
    }

}
    
return(
    persons.map(person => 
        <div key={person.id}><p style={{width: "50%",display:"inline"}} key={person.name}>{person.name} {person.number}</p><button onClick={(() => {deletePerson(person)})}>Delete</button></div>)
)
}

export default Persons