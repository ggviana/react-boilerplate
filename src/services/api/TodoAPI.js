import requester from './requester'
import wait from 'util/wait'

let nextId = 1, todos = [{
  id: 0,
  description: 'Some note'
}]

const toData = response => response.data

class TodoAPI {
  getAll () {
    return requester.get('/todos').then(toData)
  }

  get (id) {
    return requester.get(`/todos/${id}`).then(toData)
  }

  save (todo) {
    return requester.post('/todos', todo).then(toData)
  }

  deleteById (id) {
    return requester.delete(`/todos/${id}`).then(toData)
  }
}

export default new TodoAPI()
