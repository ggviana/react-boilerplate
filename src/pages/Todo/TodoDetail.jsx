import React from 'react'
import { TodoConsumer } from 'contexts/Todo'
import { Wait } from 'components'

const TodoDetail = ({ match }) => (
  <TodoConsumer>
    {home => (
      <Wait for={home.getTodo(match.params.todoId)}>
        {({ value, pending }) => {
          if (pending) {
            return (
              <p>Loading...</p>
            )
          }

          const todo = value

          return (
            <div>
              <h2>{todo.title}</h2>
              Completed: {todo.completed ? <span>&#x2713;</span> : <span>&times;</span>}
            </div>
          )
        }}
      </Wait>
    )}
  </TodoConsumer>
)

export default TodoDetail
