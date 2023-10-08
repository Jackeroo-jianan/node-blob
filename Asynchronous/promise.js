const fs = require('fs')

function readFile(file){
  return new Promise((resolve,reject) => {
    fs.readFile(file,(err,data)=>{
      if (err){
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readFile('./test.txt')
.then(data => {
  console.log(data)
})
.catch(err=>{
  console.log(err)
})
