import React from 'react'

const Filter = ({filter, setFilter, persons, setPersons}) => {

    const handleFilter = (event) => {

        setFilter(event.target.value)
        const result = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        setPersons(result)

      }
        
    return (<div>filter shown with: <input value={filter} onChange={handleFilter} /> </div>)
}

export default Filter