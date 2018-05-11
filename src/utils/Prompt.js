const Read = require('./Read')

class Prompt {
  constructor () {
    this.questions = []
    this.truthyValues = /y|yes|on|true|enabled/i
    this.falseyValues = /n|no|off|false|disabled/i
  }

  ask (question) {
    this.questions.push(question)
  }

  prompt () {
    this.answers = {}
    return new Promise((resolve, reject) => {
      const next = () => {
        const question = this.questions.shift()
        if (!question) {
          resolve(this.answers)
          return
        }

        this.read(question, (err, answer) => {
          this.handleAnswer(question, answer)
          next()
        })
      }

      next()
    })
  }

  read (question, fn) {
    const read = new Read(question)
    return read.prompt(fn)
  }

  handleAnswer (question, answer) {
    if (question.type === 'boolean') {
      if (this.truthyValues.test(answer)) {
        this.answers[question.name] = true
      } else if (this.falseyValues.test(answer)) {
        this.answers[question.name] = false
      } else {
        this.questions.unshift(question)
      }
    } else if (question.type === 'array') {
      if (answer === '') {
        return
      }

      if (!this.answers[question.name]) {
        this.answers[question.name] = []
      }

      this.answers[question.name].push(answer)
      this.questions.unshift(question)
    } else {
      this.answers[question.name] = answer
    }
  }
}

module.exports = Prompt
