const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('does not change already-capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('leaves a non-letter first character unchanged', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });

  test('handles an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});