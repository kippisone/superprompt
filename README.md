Superprompt
=============

[![Build Status](https://travis-ci.org/Andifeind/superprompt.svg?branch=develop)](https://travis-ci.org/Andifeind/superprompt)

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

| Name      | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| `name`    | Set a property name                                                                         |
| `type`    | Set a prompt type. Could be 'string', 'boolean', 'number' or 'array'. Defaults to 'string'. |
| `default` | Default value                                                                               |
