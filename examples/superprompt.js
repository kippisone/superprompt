'use strict';

let questions = [{
  name: 'name',
  type: 'prompt',
  question: 'Enter an username'
}, {
  name: 'password',
  type: 'password',
  question: 'Password for login'
}, {
  name: 'email',
  type: 'prompt',
  question: 'Enter an email'
}];

let superprompt = require('../superprompt');
superprompt(questions).then((result) => {
  console.log(JSON.stringify(result, null, '  '));
});
