const expect = require('expect');


let { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let response = generateMessage('Trevor', 'This is the text');

    expect(response.from).toBe('Trevor');
    expect(response.text).toBe('This is the text');
    expect(typeof response.createdAt).toBe('number');
  });


});