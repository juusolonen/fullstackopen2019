import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  const sorted = resp.data.sort((a, b) => b.likes - a.likes)
  return sorted
}

const create = async (token, newItem) => {
  const conf = {
      headers: {Authorization: `Bearer ${token}`}
  }
  try {
      const resp = await axios.post(baseUrl, newItem, conf)
      return resp.data
  } catch (exp) {console.log(exp)}
} 

const addLike = async (id,modifiedObject) => {
  try {
    const resp = await axios.put(`${baseUrl}/${id}`, modifiedObject)
    return resp
  } catch (exp) {
    console.log(exp)
  }
}

const removeBlog = (token, id) => {
  const conf = {
    headers: {Authorization: `Bearer ${token}`}
}
  try {
    const resp = axios.delete(`${baseUrl}/${id}`, conf)
    return resp
  } catch (exp) {
    console.log(exp)
  }

}



export default { getAll, create, addLike, removeBlog }