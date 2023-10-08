/*
 * @Author: zhangjianan13
 * @Date: 2023-09-06 17:19:03
 * @LastEditors: zhangjianan13
 * @LastEditTime: 2023-09-07 15:05:16
 * @FilePath: \1http-test\index.js
 * @Descripttion: 业务描述
 */
const http = require('http')
const queryString = require('querystring')

// get请求 -------------------------------------------------
// const server = http.createServer((req, res) => {
//  // console.log('request----',req)
//   const {url} = req
//   console.log('request----url',url)
//   req.query = queryString.parse(url.split('?')[1])
//   res.end(JSON.stringify(req.query))
// })

// post请求 -------------------------------------------------

const server = http.createServer((req, res) => {
  
   const {url, headers} = req
   
   console.log('request----url', url)
   console.log('headers----', headers)
   res.setHeader('Content-type','application/json')
   let data 
   req.on('data', chunk => {
    // 二进制 => 字符串
    data += chunk.toString()
   })

   req.on('end', chunk => {
    console.log('数据接收完毕----', data)
    res.end(
      JSON.stringify({
        data:headers,
        code:200
      })
    )
   })

  
 })
server.listen(3030)
console.log('3030 listening~~~')