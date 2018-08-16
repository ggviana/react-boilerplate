import noop from './noop'

it('should return a function', () => {
  expect(typeof noop).toBe('function')
})

it('should return always undefined', () => {
  expect(noop()).toBe(undefined)
  expect(noop(2)).toBe(undefined)
  expect(noop(noop)).toBe(undefined)
})

it('should be strictly equal to itself', () => {
  const person = {
    say: noop
  }

  expect(person.say === noop).toBe(true)
})
