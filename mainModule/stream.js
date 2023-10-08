const fs = require('fs')
const zlib = require('zlib')
//====================创建读取流&写入流==============
const readStream = fs.createReadStream('./fs.js',{ encoding: 'utf-8'}) // 读取文件的stream对象
const writeStream = fs.createWriteStream('./streamOut2.js',{ encoding: 'utf-8'}) // 写入文件的stream对象

//====================读取流&写入流 使用==============
// 文件分块逐个读取写入
readStream.on('data',(chunk)=>{
  writeStream.write(chunk)
})
// 读取完毕 写入完成
readStream.on('end',()=>{
  writeStream.end()
  console.log('write end')
})
// 写入完成
writeStream.on('finish',()=>{
  console.log('write finish')
})
// 读取错误
readStream.on('error',(err)=>{
  console.log('wirte error', err)
})
// 写入错误
writeStream.on('error',(err)=>{
  console.log('wirte error', err)
})

//====================管道流 使用==============
readStream.pipe(writeStream) // 使用管道

writeStream.on('finish',()=>{
  console.log('pipe write finish')
})

//====================转换流 使用==============
fs.createReadStream('./events.js',{ encoding: 'utf-8'})  // 创建文件读取流
  .pipe(zlib.createGzip())  // 创建gzip转换流
  .pipe(fs.createWriteStream('events.js.gz')) // 写入流