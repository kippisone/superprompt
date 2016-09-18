'use strict';

let questions = [{
  name: 'name',
  type: 'prompt',
  description: 'Enter an username'
}, {
  name: 'password',
  type: 'password',
  description: 'Password for login'
}, {
  name: 'email',
  type: 'prompt',
  description: 'Enter an email'
}];

let superPrompt = require('../superprompt');
superPrompt(questions).then((result) => {
  console.log(JSON.stringify(result, null, '  '));
});
