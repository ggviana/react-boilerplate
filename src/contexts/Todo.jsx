import TodoAPI from 'services/api/TodoAPI'
import createContext from 'contexts/create'

const TodoContext = createContext(({ get, set }) => ({
  todos: [],
  currentTitle: '',
  currentTodo: null,
  isLoading: false,

  getTodos: () => set('isLoading', true)
    .then(() => TodoAPI.getAll())
    .then(todos => set({
      todos: todos,
      isLoading: false
    }))
    .then(store => store.todos),

  getTodo: id => set('isLoading', true)
    .then(() => TodoAPI.get(id))
    .then(todo => set('currentTodo', todo))
    .then(store => store.currentTodo),

  addTodo: item => set('isLoading', true)
    .then(() => TodoAPI.save(item))
    .then(todo => set({
      todos: get('todos').concat(todo),
      currentTitle: '',
      isLoading: false
    })),

  removeTodo: id => set('isLoading', true)
    .then(() => TodoAPI.deleteById(id))
    .then(() => set({
      todos: get('todos').filter(todo => todo.id !== id),
      isLoading: false
    })),

  updateTitle: text => set('currentTitle', text)
}))

export const TodoConsumer = TodoContext.Consumer
export const TodoProvider = TodoContext.Provider
