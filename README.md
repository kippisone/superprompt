Superprompt
=============

Superprompt is a simple commandline prompting tool using `promptly`.

Installation
------------

`npm install superprompt`

Usage
-----

```js
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

let superPrompt = require('superprompt');
superPrompt(questions, function(err, result) {
  console.log(result);
});

//Result may looks like:
{
  name: 'Andi',
  password: '123456',
  email: 'andi.oxidant@noname-media.com'
}
```

See [Promptly documentation](https://github.com/IndigoUnited/node-promptly) for more infos about promptly.



Options
-------

 Name | Description
 ---|---
 `name` | Set a property name
 `type` | Set prompt type. Could be 'prompt', 'confirm', 'password' or 'choose'. Defaults to 'prompt'
 `values` | Defines values for a 'choose' prompt <br>Example: values: ['aa', 'bb', 'cc'],
 `default` |  The default value. If not supplied, the input is mandatory
 `trim` |  Automatically trim the input
 `validator` |  A validator or an array of validators.
 `retry` |  Automatically retry if a validator fails
 `silent` |  Do not print what the user types
 `input` |  Input stream to read
 `output` |  Output streams to write


API
---

#### Dissable colorized output
`promptlySync.noColor = true;`

#### Returns promptly
`superPrompt.promptly`

#### Calls promptly.prompt
`superPrompt.prompt()`

#### Calls promptly.confirm
`superPrompt.confirm()`

#### Calls promptly.password
`superPrompt.password()`

#### Calls promptly.choose
`superPrompt.choose()`
