import axios from 'axios'

const http = axios.create({
  baseURL: 'https://memories-rest-api.herokuapp.com',
})

export default http
