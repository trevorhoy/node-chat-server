const expect = require('expect');

const { isRealString } = require('./validation');

describe('Real String Validation', () => {
  it('should reject non-string values', () => {
    let str = 234;
    let result = isRealString(str);

    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let str = '     ';
    let result = isRealString(str);

    expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    let str = '   hellothisisastring   ';
    let result = isRealString(str);

    expect(result).toBe(true);
  });
})