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

async function readFileAsync () {
  try {
    const file = await readFile('./test.txt')
    console.log(file)
  } catch (err) {
    console.log(err)  
  }
}

readFileAsync()
