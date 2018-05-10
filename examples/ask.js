const Prompt = require('../src/utils/Prompt')

const rt = new Prompt()
rt.ask({ question: 'How are you? (string)', name: 'bar', type: 'string' })
rt.ask({ question: 'What do you do? (string)', name: 'foo', type: 'string' })
rt.ask({ question: 'Do you like superprompt [yes/no] (boolean)?', name: 'likeIt', type: 'boolean' })
rt.ask({ question: 'What kind of fruits do you like? (array)', name: 'fruits', type: 'array' })

rt.prompt().then(console.log).catch(console.error)
