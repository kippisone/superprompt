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

    this.rl.on('SIGTERM', function () {
      this.rl.close()
    })
  }

  prompt (fn) {
    this.__resolve = fn
    this.rl.on('line', this.readHandler.bind(this))
    this.rl.on('error', this.errorHandler.bind(this))
    this.rl.prompt(true)
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
