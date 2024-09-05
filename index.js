/* eslint-disable no-underscore-dangle */
let messages = {};

/**
 * Translate a message
 */
function __(...args) {
  // Init vars
  const words = [...args.shift()];
  const length = words.length;

  // Create pattern to lookup translation
  for (let i = 1; i < length; i += 1) {
    words.splice(i * 2 - 1, 0, '%s');
  }

  // Init pattern
  let pattern = words.join('');

  // Has translation ?
  if (pattern in messages) {
    pattern = messages[pattern];
  }

  // Replace values
  return pattern.replace(/%s/g, () => args.shift());
}

/**
 * Load JSON dictionary
 */
__.setMessages = function (data) {
  Object.assign(messages, data);
};

/**
 * Get dictionary
 */
__.getMessages = function () {
  return messages;
};

module.exports = __;
