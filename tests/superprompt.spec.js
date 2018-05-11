'use strict';

let inspect = require('inspect.js');
let sinon = require('sinon');
let superprompt = require('../src/superprompt.js');
let Prompt = superprompt.Prompt;

inspect.useSinon(sinon);
superprompt.noColor = true;

describe('Superprompt', function() {
  let readStub

  beforeEach(function() {
    readStub = sinon.stub(Prompt.prototype, 'read')
  })

  afterEach(function() {
    readStub.restore()
  })

  it('Should generate a prompt', function() {
    let questions = []

    readStub.yields('Test')

    questions.push({
      name: 'testPrompt',
      description: 'Make a prompt',
      default: 'test',
      type: 'string'
    }, {
      name: 'testPrompt2',
      description: 'Make a second prompt',
      type: 'string'
    })

    return superprompt(questions).then((res) => {
      inspect(res).isEql({
        testPrompt: 'Test',
        testPrompt2: 'Test'
      })
    })

    inspect(readStub).wasCalledTwice()
  })
})
