const greeter = require('./index.js')

console.log('Starting tests')

const resOne = greeter()
if (resOne !== 'Hello, User!') {
  throw new Error('Greeter is not working with default argument!')
}

const resTwo = greeter('Ahmed')
if (resTwo !== 'Hello, Ahmed!') {
  throw new Error('Greeter is not working with name argument!')
}
