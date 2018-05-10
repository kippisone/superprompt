const readline = require('readline')
const colorfy = require('colorfy')

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
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: colorfy.yellow('? ')
    })

    const yellow = colorfy.yellow('?')

    this.answers = {}
    return new Promise((resolve, reject) => {
      const next = () => {
        const question = this.questions.shift()
        if (!question) {
          rl.close()
          resolve(this.answers)
          return
        }

        rl.question(`${yellow} ${colorfy.lgrey(question.question)}: `, (answer) => {
          this.handleAnswer(question, answer)
          next()
        });
      }

      next()
    })
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
