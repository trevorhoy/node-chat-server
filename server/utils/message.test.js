const expect = require('expect');


let { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let response = generateMessage('Trevor', 'This is the text');

    expect(response.from).toBe('Trevor');
    expect(response.text).toBe('This is the text');
    expect(typeof response.createdAt).toBe('function');
  });


});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Trevor';
    let latitude = 1;
    let longitude = 1;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    let response = generateLocationMessage(from, latitude, longitude);

    expect(response.from).toBe('Trevor');
    expect(response.url).toBe(url);
    expect(typeof response.createdAt).toBe('function');
  })
})