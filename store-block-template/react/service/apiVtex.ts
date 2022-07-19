import axios from 'axios'

const apiVtex = axios.create({
  baseURL: "https://dreamscapeloja1--dreamscape.myvtex.com/api"
})

function getUser() {
  return apiVtex.get("/vtexid/pub/authenticated/user")
} 

export default {
  getUser
}