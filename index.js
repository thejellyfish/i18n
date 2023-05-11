/* eslint-disable no-underscore-dangle */
let messages = {};

function __(...args) {
  // Init vars
  const words = [...args.shift()];
  const length = words.length;

  // Create pattern to lookup translation
  for (let i = 1; i < length; i += 1) {
    words.splice(i * 2 - 1, 0, '%s');
  }

  // Get translated pattern
  const pattern = words.join('');
  const translation = messages[pattern] || pattern;

  // Replace values
  return translation.replace(/%s/g, () => args.shift());
}

__.setMessages = function (data){
  messages = data;
};

module.exports = __;
