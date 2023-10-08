const sum = require('./module1')
const {max, min } = require('./module2')
const math = require('./module2')

console.log(sum(1,2)) // 3
console.log(max(1,2),min(1,2)) // 2 1
console.log(math.max(1,2),math.min(1,2)) // 2 1