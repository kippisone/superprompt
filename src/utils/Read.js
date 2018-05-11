const readline = require('readline')
const colorfy = require('colorfy')

class Read {
  constructor (conf) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    })

    this.rl.setPrompt(colorfy.lime('? ') + colorfy.lgrey(conf.question) + ' ')
    this.question = conf.question
    this.default = conf.default

    this.rl.on('SIGTERM', function () {
      this.rl.close()
    })
  }

  prompt (fn) {
    this.__resolve = fn
    this.rl.on('line', this.readHandler.bind(this))
    this.rl.on('error', this.errorHandler.bind(this))
    this.rl.prompt(true)
    if (this.default) {
      this.rl.write(this.default)
    }
  }

  readHandler (line) {
    this.rl.close()
    this.__resolve(null, line)
  }

  errorHandler (err) {
    this.rl.close()
    throw err
  }
}

module.exports = Read
