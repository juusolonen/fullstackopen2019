import React from 'react'

const Filter = ({filter, setFilter, countries, found, setFound}) => {

    const handleFilter = (event) => {

        setFilter(event.target.value)
        const result = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
        setFound(result)
        //console.log(found)
      }
        
    return (<div>filter shown with: <input value={filter} onChange={handleFilter} /> </div>)
}

export default Filter