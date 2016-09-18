'use strict';

let promptly = require('promptly');
let cf = require('colorfy');

module.exports = function(questions, done) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let result = {};

    let next = function() {
      let item = questions[i++];
      if (!item) {
        resolve(result);
        if (done) {
          done(null, result);
        }
        return ;
      }

      let promptOpts = {
        default: item.default,
        trim: item.trim,
        validator: item.validator,
        retry: item.retry,
        silent: item.silent
      };

      let description = cf().azure(item.description);

      if (item.default) {
        description.grey('(' + item.default + ')');
      }

      description.txt(':', 'trim').print(!module.exports.noColor);

      let args = [''];
      if (item.type === 'choose') {
        args.push(item.values);
      }

      args.push(promptOpts, function(err, res) {
        if (!err) {
          result[item.name] = res;
        }

        next();
      });

      promptly[item.type || 'prompt'].apply(promptly, args);
    };

    next();
  });
};

module.exports.promptly = promptly;
module.exports.prompt = promptly.prompt;
module.exports.password = promptly.password;
module.exports.confirm = promptly.confirm;
module.exports.choose = promptly.choose;
module.exports.noColor = false;
