import wait from './wait'

it('should return a promise that resolve to undefined', () => {
  expect(wait()).resolves.toEqual(undefined)
})
