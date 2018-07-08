import {configure} from '@storybook/react'

configure(() => {
  const req = require.context('../src', true, /.*?\.story.jsx$/)
  req.keys().forEach(filename => req(filename))
}, module)
