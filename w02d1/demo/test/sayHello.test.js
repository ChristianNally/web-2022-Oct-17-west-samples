//const assert = require('assert');
const assert = require('chai').assert;

const functionsObject = require('../hello-world');

describe('collection of sayHello tests', () => {

  it('produces the expected output', () => {
    const output = functionsObject.sayHello('my little friend');
    assert.equal(output, 'Hello, my little friend');
  });
  
  it('produces additional expected output', () => {
    const output = functionsObject.sayHello('World');
    assert.equal(output, 'Hello, World');
  });

});

describe('collection of sayGoodbye tests', () => {

  it('produces the expected output', () => {
    const output = functionsObject.sayGoodbye('my little friend');
    assert.equal(output, 'Goodbye, my little friend');
  });
  
  it('produces additional expected output', () => {
    const output = functionsObject.sayGoodbye('World');
    assert.equal(output, 'Goodbye, World');
  });

});


describe('collection of See Ya Later tests', () => {

  it('produces the expected output', () => {
    const output = functionsObject.saySYL('my little friend');
    assert.equal(output, 'See ya later, my little friend');
  });
  
  it('produces additional expected output', () => {
    const output = functionsObject.saySYL('World');
    assert.equal(output, 'See ya later, World');
  });

});
