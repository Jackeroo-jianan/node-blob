
function test(callback){
  console.log('HELLO WORLD')
  callback('HELLO world')
  console.log('hello word')
}

test(function(data){
  console.log(data)
})
console.log('123')
// HELLO WORLD   HELLO world   hello word

const fs = require('fs')
fs.readFile('./test.txt','utf8', (err,data)=>{
  if (err){
    console.log('error',err)
  } else {
    console.log(data)
  }
})

console.log('123')