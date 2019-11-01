import React from 'react'

const Form = ({addPerson, newName, handleNewName, newNumber, handleNewNumber}) => (<form onSubmit={addPerson}>
    <div>
        name: <input value={newName} onChange={handleNewName} /></div><br />
    <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
    </div>
    <div>
        <button type="submit">add</button>
    </div>
</form>)


export default Form