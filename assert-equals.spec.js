const assertEquals = require('./assert-equals')
const sum = require('./utils/sum');
const values = require('./utils/values');

describe('assertEquals', () => {
  
  // Strings, numbers, booleans, null or undefined
  describe('when expected and actual are the same primitive value', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
      expect(() => assertEquals(1, 1)).not.toThrow();
      expect(() => assertEquals(true, true)).not.toThrow();
      expect(() => assertEquals(null, null)).not.toThrow();
      expect(() => assertEquals(undefined, undefined)).not.toThrow();
    })
  })

  describe('when expected and actual are different primitive values', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow();
      expect(() => assertEquals(1, 2)).toThrow();
      expect(() => assertEquals(true, false)).toThrow();     
      expect(() => assertEquals(null, undefined)).toThrow(); 
    })
  })

  // Primitive data types
  describe('when expected and actual are the same primitive type', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(typeof 1, typeof 1)).not.toThrow();
      expect(() => assertEquals(typeof true, typeof false)).not.toThrow();     
    })
  })

  describe('when expected and actual are the different primitive type', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(typeof 1, typeof '1')).toThrow();
      expect(() => assertEquals(typeof null, typeof undefined)).toThrow();     
    })
  })

  // Array lengths and values
  describe('when expected and actual arrays values or length are the same', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(values.arrA.length, values.arrC.length)).not.toThrow();
      expect(() => assertEquals(values.arrA[1], values.arrC[1])).not.toThrow();
      expect(() => assertEquals(values.arrA, values.arrC)).not.toThrow();
    })
  })

  describe('when expected and actual arrays values or lengths are different', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(values.arrA.length, values.arrB.length)).toThrow();
      expect(() => assertEquals(values.arrA[3], values.arrD[3])).toThrow();
      expect(() => assertEquals(values.arrA, values.arrD)).toThrow();
    })
  })

  // Output of a function 
  describe('when expected and actual function output are the same', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(sum(2, 3), 5)).not.toThrow();
    })
  })

  describe('when expected and actual function output are different', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(sum(2, 3), 8)).toThrow();
    })
  })
})
