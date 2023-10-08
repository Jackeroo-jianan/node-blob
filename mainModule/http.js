const fs = require('fs')
const https = require('https')

// const req = https.request('https://img-blog.csdnimg.cn/b75770b282224c5c9858740eb83ab2c7.png#pic_center',
//   (res)=>{
//     console.log(res.statusCode)
//     res.pipe(fs.createWriteStream('./bolg.png'))
//   }
// )

// req.end()

const http = require('http')

const server = http.createServer((req,res)=>{
  res.end(JSON.stringify(req.headers))
})

server.listen(8899, () => console.log('listen on 8899'))