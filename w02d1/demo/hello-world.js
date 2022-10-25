// implement a function called sayHello that 
// takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  let output = '';
  output = `Hello, ${name}`;
  return output;
};

const sayGoodbye = (name) => {
  let output = '';
  output = `Goodbye, ${name}`;
  return output;
};

// make the functions exportable
module.exports = { 
  sayHello: sayHello, 
  sayGoodbye: sayGoodbye
};
