import identity from './identity'

it('should return the provided arg', () => {
  const oneFunction = identity(1)
  expect(oneFunction()).toBe(1)
})
