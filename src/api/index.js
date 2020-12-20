import axios from 'axios'

const http = axios.create({
  baseURL: 'https://c-memories-api.herokuapp.com',
})

export default http
