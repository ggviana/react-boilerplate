import React from 'react'
import { mount } from 'enzyme'
import Visible from './Visible'

it('should show children when visible', () => {
  const wrapped = mount(
    <Visible when={true}>
      <p>text</p>
    </Visible>
  )

  expect(wrapped.contains(<p>text</p>)).toBe(true)
})

it('should hide children when not visible', () => {
  const wrapped = mount(
    <Visible when={false}>
      <p>text</p>
    </Visible>
  )

  expect(wrapped.contains(<p>text</p>)).toBe(false)
})
