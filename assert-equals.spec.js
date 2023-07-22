const assertEquals = require('./assert-equals')
const sum = require('./utils/sum');
const values = require('./utils/values');

describe('assertEquals', () => {
  
  // Strings:
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

  // Numbers
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

  // Primitive data types

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

  // Array lengths 
  describe('when expected and actual arrays are the same length', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(values.arrA.length, values.arrC.length)).not.toThrow();
    })
  })

  describe('when expected and actual arrays are different lengths', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(values.arrA.length, values.arrB.length)).toThrow();
    })
  })

  // Array values  
  describe('when a value at index of expected and actual arrays are the same', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(values.arrA, values.arrC)).not.toThrow();
    })
  })

  describe('when a value at index of expected and actual arrays are different', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(values.arrA, values.arrD)).toThrow();
    })
  })

  describe('when every value of expected and actual arrays are the same', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(values.arrA[1], values.arrC[1])).not.toThrow();
    })
  })

  describe('when not every value of expected and actual arrays are the same', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(values.arrA[3], values.arrD[3])).toThrow();
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

  // Null and undefined 
  describe('when expected and actual are null', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(null, null)).not.toThrow();
    })
  })

  describe('when expected and actual are undefined', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(undefined, undefined)).not.toThrow();
    })
  })

  describe('when expected and actual are null and undefined', () => {
    it('returns an error when expected and actual are different', () => {
      expect(() => assertEquals(null, undefined)).toThrow();
    })
  })

})
