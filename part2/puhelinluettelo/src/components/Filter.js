import React from 'react'

const Filter = ({filter, setFilter, persons, setFilteredPersons}) => {

    const handleFilter = (event) => {

        setFilter(event.target.value)
        const result = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredPersons(result)

      }
        
    return (<div>filter shown with: <input value={filter} onChange={handleFilter} /> </div>)
}

export default Filter