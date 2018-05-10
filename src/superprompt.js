'use strict';

const Prompt = require('./utils/Prompt')

module.exports = function(questions) {
  const prompt = new Prompt()
  prompt.questions = questions
  return prompt.prompt()
}

module.exports.Prompt = Prompt
module.exports.ask = () => {
  const prompt = new Prompt()
  prompt.ask(question)
  return prompt
}
