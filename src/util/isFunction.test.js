import isFunction from './isFunction'

it('should answer correctly for different type of primitives and objects', () => {
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction(function () {})).toBe(true)

  expect(isFunction(true)).toBe(false)
  expect(isFunction(false)).toBe(false)
  expect(isFunction(1)).toBe(false)
  expect(isFunction("")).toBe(false)
  expect(isFunction([])).toBe(false)
  expect(isFunction({})).toBe(false)
  expect(isFunction(/1/g)).toBe(false)
  expect(isFunction(new Map())).toBe(false)
})
