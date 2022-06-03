const stack = require('./index')
const chalk = require('chalk')

const s = new stack(2)
console.log('first is empty', s.isEmpty(), s.size())
s.push({
    name : 'ali'
})

s.push({
    name : 'jaffar'
})

s.push({
    name : 'ahamd'
})

// console.log('isempty1', s.isEmpty(), s.size())

let data = s.pop()

// console.log('isempty2', s.isEmpty(), s.size())

let data2 = s.pop()

let data3 = s.pop()

console.log('isempty3', s.size())

console.log(chalk.red('hello'), s.size())

console.log(chalk.white('hello this is second pop'), data2, s.size())

console.log(data3, s.size())