import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
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

export default { getAll, create }