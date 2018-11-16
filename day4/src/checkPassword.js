type ResMessage = {
  success: string,
  errors: Array<String>,
};

function checkPassword(password: string): ResMessage {
  let errors: Array<String> = [];

  let success = false;
  let exceedMinLength = false;
  let hasUppercase = false;
  let hasLowercase = false;

  if (password.length < 6) {
    errors.push('Password too short');
  } else {
    exceedMinLength = true;
  }

  if (password.match(/[A-Z]/)) {
    hasUppercase = true;
  } else {
    errors.push('Password needs uppercase');
  }
  if (password.match(/[a-z]/)) {
    hasUppercase = true;
  } else {
    errors.push('Password needs lowercase');
  }
  if (exceedMinLength && hasUppercase && hasLowercase) {
    success = true;
  }
  return {success, errors};
}

export default checkPassword;
