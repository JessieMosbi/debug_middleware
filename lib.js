const lib = {
  debug1: (req) => {
    const time = new Date()
    console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} | ${req.socket.parser.socket.parser.incoming.method} from ${req.socket.parser.socket.parser.incoming.url}`)
  }
}

module.exports = lib