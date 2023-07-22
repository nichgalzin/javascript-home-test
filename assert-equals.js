function assertEquals(expected, actual) {
  // Utility to compare array values
  function arraysEqual (expected, actual) {
    if (actual == expected) return true;
    if (expected.length !== actual.length) return false;
    return actual.every((val, index) => val === expected[index]);
  }

  // Checks if values are arrays first and compares with arraysEqual if so.
  if(Array.isArray(actual) && Array.isArray(expected)) {
    if (arraysEqual(actual, expected)) {
      console.info(`Pass: Expected ${expected} and received ${actual}`);
    } else {
      throw new Error(`Fail: Expected ${expected} but received ${actual} instead`);
    }  
  } else { 
    
    //Strict equal checking for primitive data values 
    if (actual === expected) {
      console.info(`Pass: Expected ${expected} and received ${actual}`);
    } else {
      throw new Error(`Fail: Expected ${expected} but received ${actual} instead`);
    }
  }
}

module.exports = assertEquals