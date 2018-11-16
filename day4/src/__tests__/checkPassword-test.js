import checkPassword from '../checkPassword.js';

it('should reject 123456', () => {
  expect(checkPassword('123456')).toEqual({
    success: false,
    errors: ['Password needs uppercase', 'Password needs lowercase'],
  });
});

it('should reject abc12', () => {
  expect(checkPassword('abc12')).toEqual({
    success: false,
    errors: ['Password too short', 'Password needs uppercase'],
  });
});
