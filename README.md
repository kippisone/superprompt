Superprompt
=============

Superprompt is a commandline prompting tool.
It supports `string`, `boolean`, `number` and `array` fields.


Installation
------------

`npm install superprompt`

Usage
-----

```js
const questions = [{
  name: 'name',
  type: 'string',
  question: 'Enter an username'
}, {
  name: 'isHuman',
  type: 'boolean',
  question: 'Are you a human? [yes/no]'
}, {
  name: 'list',
  type: 'array',
  question: 'Add a few items'
}]

const superprompt = require('superprompt')

superprompt.prompt(questions).then((answers) => {
  console.log(answers)
}).catch((err) => {
  console.error(err)
})

//Result may looks like:
{
  name: 'Andi',
  isHuman: true,
  list: [
    'banana',
    'pear',
    'mango'
  ]
}
```

Options
-------

 Name | Description
 ---|---
 `name` | Set a property name
 `type` | Set a prompt type. Could be 'string', 'boolean', 'number' or 'array'. Defaults to 'string'.
 `default` (not implemented yet)|  The default value. If not supplied, the input is mandatory
 `trim` (not implemented yet)|  Automatically trim the input
 `validator` (not implemented yet)|  A validator or an array of validators.
 `retry` (not implemented yet)|  Automatically retry if a validator fails
 `silent` (not implemented yet)|  Do not print what the user types
 `input` (not implemented yet)|  Input stream to read
 `output` (not implemented yet)|  Output streams to write
