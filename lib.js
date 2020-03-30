const lib = {
  debug1: (req, res, next) => {
    const time = new Date()
    console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} | ${req.socket.parser.socket.parser.incoming.method} from ${req.socket.parser.socket.parser.incoming.url}`)
    next()
  },
  debug2: (req, res, next) => {
    const time = new Date()
    const requestTime = Date.now()
    const message = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} | ${req.socket.parser.socket.parser.incoming.method} from ${req.socket.parser.socket.parser.incoming.url}`

    // get response time
    res.on('finish', () => {
      const reponseTime = Date.now()
      console.log(`${message} | total time: ${reponseTime - requestTime}ms`)
    })
    next()
  }
}

module.exports = lib
