import Axios from 'axios'

const baseUrl = '/api/login'

const login = async (cred) => {
  let resp =  await Axios.post(baseUrl, cred)
  return resp.data
}



export default { login }