import axios from 'axios'

const requester = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default requester
