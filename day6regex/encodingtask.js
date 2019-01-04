function hexify(string) {
  let result = '';
  let replaceWith = '?'.charCodeAt(0).toString(16);
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (code > 128) {
      result = result + replaceWith;
    } else {
      result = result + code.toString(16);
    }
  }
  return result;
}
function bonusTask(string) {
  let buffer = Buffer.from(string, 'hex');
  return buffer.toString('utf8');
}

let test = hexify('hello world 你好世界 ååßß');
console.log(test);
let bonus = bonusTask(test);
console.log(bonus);

//ååßß
//ԬԱ
