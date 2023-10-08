const EventEmitter = require('events')

// 实例化
const emitter = new EventEmitter()
// 注册事件
emitter.on('click', function(param) {
  console.log('click', param)
})

// once 只触发一次
// emitter.once('click', function(param) {
//   console.log('clickOnce', param)
// })

// 触发事件
emitter.emit('click','hello')
emitter.emit('click','word')
