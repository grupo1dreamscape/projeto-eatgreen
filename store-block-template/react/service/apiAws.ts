import axios from 'axios'

const apiAws = axios.create({
  baseURL: "https://nes6120zw5.execute-api.sa-east-1.amazonaws.com"
})

function getSaldo(id: string) {
  return apiAws.post(`/buscasaldo/${id}`)
} 



export default {
  getSaldo
}