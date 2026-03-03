const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('returns an empty string unchanged', () => {
    expect(reverseString('')).toBe('');
  });

  test('a single character is unchanged', () => {
    expect(reverseString('a')).toBe('a');
  });
});