const stack = require('./index')
const chalk = require('chalk')

const s = new stack()

s.push({
    name : 'ali'
})

s.push({
    name : 'jaffar'
})

s.push({
    name : 'ahamd'
})

let data = s.pop()

let data2 = s.pop()

let data3 = s.pop()

console.log(chalk.red('hello'),data)

console.log(chalk.black('hello this is second pop'), data2)

console.log(data3)