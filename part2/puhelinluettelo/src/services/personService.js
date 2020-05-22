import Axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAllPersons = () => {
    const request = Axios.get(baseUrl);
    return request.then(response => response.data)
}

const addPerson = (newPerson) => {
    const request = Axios.post(baseUrl, newPerson);
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = Axios.delete(`${baseUrl}/${id}`)
    return request
}

const updatePerson = (person, newPerson) => {
    const request = Axios.put(`${baseUrl}/${person.id}`, newPerson)
    return request.then((response) => response.data)
}


export default {getAllPersons, addPerson, deletePerson, updatePerson}