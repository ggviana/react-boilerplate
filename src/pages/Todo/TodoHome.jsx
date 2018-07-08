import React from 'react'
import { TodoConsumer } from 'contexts/Todo'
import { TodoForm, TodoList, Wait } from 'components'

const TodoHome = () => (
  <TodoConsumer>
    {home => (
      <div>
        <TodoForm home={home} />
        <Wait for={home.getTodos()}>
          {({ pending, value: todos }) => {
            if (pending) {
              return <p>Loading...</p>
            }

            return (
              <TodoList
                todos={todos}
                onDelete={item => home.removeTodo(item.id)}
              />
            )
          }}
        </Wait>
      </div>
    )}
  </TodoConsumer>
)

export default TodoHome
