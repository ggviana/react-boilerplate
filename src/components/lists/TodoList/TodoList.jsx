import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ todos, onDelete }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <a
          href={`/delete/${todo.id}`}
          onClick={event => {
            event.preventDefault()
            onDelete(todo)
          }}>
          Delete
        </a>
        &nbsp;
        {todo.completed ? <span>&#x2713;</span> : <span>&times;</span>}
        &nbsp;
        <Link to={`/todo/${todo.id}`}>
          {todo.title}
        </Link>
      </li>
    ))}
  </ul>
)

export default TodoList
