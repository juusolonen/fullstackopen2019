import Axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

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


export default {getAllPersons, addPerson, deletePerson}