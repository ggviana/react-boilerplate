import React from 'react'
import { Field, Form, Visible } from 'components'

const TodoForm = ({ home }) => {
  return (
    <Form onSubmit={() => home.addTodo({ description: home.currentTitle })}>
      <Field
        type='text'
        name='currentTitle'
        value={home.currentTitle}
        onChange={event => home.updateTitle(event.value)}
      />

      <Field
        type='submit'
        value='Save'
        disabled={home.isLoading}
      />

      <Visible when={home.isLoading}>
        <span>
          Loading...
        </span>
      </Visible>
    </Form>
  )
}

export default TodoForm
