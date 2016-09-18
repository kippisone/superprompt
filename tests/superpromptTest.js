'use strict';

let inspect = require('inspect.js');
let sinon = require('sinon');
let superPrompt = require('../superprompt.js');
let promptly = superPrompt.promptly;

inspect.useSinon(sinon);
superPrompt.noColor = true;

describe('PromptlySync', function() {
  let promptStub,
    confirmStub,
    passwordStub,
    chooseStub;

  beforeEach(function() {
    promptStub = sinon.stub(promptly, 'prompt');
    confirmStub = sinon.stub(promptly, 'confirm');
    passwordStub = sinon.stub(promptly, 'password');
    chooseStub = sinon.stub(promptly, 'choose');
  });

  afterEach(function() {
    promptStub.restore();
    confirmStub.restore();
    passwordStub.restore();
    chooseStub.restore();
  });

  it('Should generate a prompt', function(done) {
    let questions = [];

    promptStub.yields(null, 'Test');

    questions.push({
      name: 'testPrompt',
      description: 'Make a prompt',
      default: 'test',
    }, {
      name: 'testPrompt2',
      description: 'Make a second prompt',
      type: 'prompt'
    });

    superPrompt(questions, function(err, res) {
      inspect(res).isEql({
        testPrompt: 'Test',
        testPrompt2: 'Test'
      });

      done(err);
    });

    inspect(promptStub).wasCalledTwice();
  });

  it('Should generate a confirm', function(done) {
    let questions = [];

    confirmStub.onCall(0).yields(null, true);
    confirmStub.onCall(1).yields(null, false);

    questions.push({
      name: 'testPrompt',
      description: 'Make a confirm',
      type: 'confirm'
    }, {
      name: 'testPrompt2',
      description: 'Make a second confirm',
      type: 'confirm'
    });

    superPrompt(questions, function(err, res) {
      inspect(res).isEql({
        testPrompt: true,
        testPrompt2: false
      });

      done(err);
    });

    inspect(confirmStub).wasCalledTwice();
  });

  it('Should generate a password', function(done) {
    let questions = [];

    passwordStub.onCall(0).yields(null, true);
    passwordStub.onCall(1).yields(null, false);

    questions.push({
      name: 'testPrompt',
      description: 'Make a password',
      type: 'password'
    }, {
      name: 'testPrompt2',
      description: 'Make a second password',
      type: 'password'
    });

    superPrompt(questions, function(err, res) {
      inspect(res).isEql({
        testPrompt: true,
        testPrompt2: false
      });

      done(err);
    });

    inspect(passwordStub).wasCalledTwice();
  });

  it('Should generate a choose', function(done) {
    let questions = [];

    chooseStub.onCall(0).yields(null, 'aa');
    chooseStub.onCall(1).yields(null, 'bb');

    questions.push({
      name: 'testPrompt',
      description: 'Make a choose',
      type: 'choose',
      values: ['aa', 'bb']
    }, {
      name: 'testPrompt2',
      description: 'Make a second choose',
      type: 'choose',
      values: ['aa', 'bb']
    });

    superPrompt(questions, function(err, res) {
      inspect(res).isEql({
        testPrompt: 'aa',
        testPrompt2: 'bb'
      });

      done(err);
    });

    inspect(chooseStub).wasCalledTwice();
  });
});
