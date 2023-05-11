const __ = require('./index');

// Start tests ...
describe('Translate', () => {
  it('Translate word not in dictionnary', () => expect(__`Boom`).toBe('Boom'));

  it('Set dictionnary and translate red in rouge', () => {
    __.setMessages({ red: 'rouge' });
    expect(__`red`).toBe('rouge');
  });

  it('Set dictionnary and translate pattern', () => {
    __.setMessages({ 'My name is %s': 'Mon nom est %s' });
    expect(__`My name is ${'Mohamed'}`).toBe('Mon nom est Mohamed');
  });
});
