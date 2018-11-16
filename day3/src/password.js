export default function checkPassword(password) {
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let exceedMinLength = false;
  let success = false;
  let errors = [];
  if (password.length < 6) {
    errors.push('Password too short!');
  } else {
    exceedMinLength = true;
  }

  for (let letter of password) {
    if (letter >= '0' && letter <= '9') {
      hasNumber = true;
    } else {
      if (letter === letter.toUpperCase()) {
        hasUppercase = true;
      }
      if (letter === letter.toLowerCase()) {
        hasLowercase = true;
      }
    }
  }
  if (!hasUppercase) {
    errors.push('No uppercase in password');
  }
  if (!hasLowercase) {
    errors.push('No lowercase in password');
  }
  if (!hasNumber) {
    errors.push('No digits in password');
  }

  if (hasUppercase && hasLowercase && exceedMinLength) {
    success = true;
  }
  return {success, errors};
}
