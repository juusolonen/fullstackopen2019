import React from 'react'

const Filter = ({handleFilter, filterValue}) => (
<div>
    filter shown with <input
    value={filterValue}
    onChange={handleFilter} />
</div>
)


export default Filter