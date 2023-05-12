const __ = require('./index');

// Start tests ...
describe('Translate', () => {
  it('Translate word not in dictionary', () => expect(__`Boom`).toBe('Boom'));

  it('Set dictionary and translate "red" into "rouge"', () => {
    __.setMessages({ red: 'rouge' });
    expect(__`red`).toBe('rouge');
  });

  it('Set dictionary and translate pattern "My name is %s %s"', () => {
    __.setMessages({ 'My name is %s %s': 'Mon nom est %s %s' });
    const me = { firstname: 'Mohamed', lastname: 'BENARROUDJ' };
    expect(__`My name is ${me.firstname} ${me.lastname}`).toBe('Mon nom est Mohamed BENARROUDJ');
  });
});
