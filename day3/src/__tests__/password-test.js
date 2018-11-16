import checkPassword from '../password.js';

it('should mark 123456 unsuccessful with error message of no lowercase and uppercase ', () => {
  expect(checkPassword('123456')).toEqual({
    success: false,
    errors: ['No uppercase in password', 'No lowercase in password'],
  });
});

it('should mark Abcde unsuccessful with error message of password too short and no digits ', () => {
  expect(checkPassword('Abcde')).toEqual({
    success: false,
    errors: ['Password too short!', 'No digits in password'],
  });
});

it('should mark Abcd123 successful with empty error message', () => {
  expect(checkPassword('Abcd123')).toEqual({
    success: true,
    errors: [],
  });
});

it('should mark abcd123 successful with empty error message', () => {
  expect(checkPassword('abcd123')).toEqual({
    success: false,
    errors: ['No uppercase in password'],
  });
});
