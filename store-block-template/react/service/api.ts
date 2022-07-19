import axios from 'axios'

const api = axios.create({
  baseURL: "https://nes6120zw5.execute-api.sa-east-1.amazonaws.com"
})

export default api