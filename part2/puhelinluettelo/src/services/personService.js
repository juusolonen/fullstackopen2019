import Axios from 'axios';
const baseUrl = 'https://protected-headland-68853.herokuapp.com/api/persons';
const baseUrl2 = '/api/persons'
const getAllPersons = () => {
    const request = Axios.get(baseUrl2);
    return request.then(response => response.data)
}

const addPerson = (newPerson) => {
    const request = Axios.post(baseUrl2, newPerson);
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = Axios.delete(`${baseUrl2}/${id}`)
    return request
}

const updatePerson = (person, newPerson) => {
    const request = Axios.put(`${baseUrl2}/${person.id}`, newPerson)
    return request.then((response) => response.data)
}


export default {getAllPersons, addPerson, deletePerson, updatePerson}