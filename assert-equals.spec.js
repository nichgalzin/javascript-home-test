const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  
  // Check strings:
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
      
    })
  })

  describe('when expected and actual are different strings', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow();
    })
  })

  // Check numbers
  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1, 1)).not.toThrow();
    })
  })

  describe('when expected and actual are the different numbers', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(1, 2)).toThrow();
    })
  })

  // Check primitive data types

  describe('when expected and actual are the same primitive type', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(typeof 1, typeof 1)).not.toThrow();
    })
  })

  describe('when expected and actual are the different primitive type', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(typeof 1, typeof '1')).toThrow();
    })
  })

})
