/*
Create Regex to match mentions inside a string
 */

let regex = /@\w+\b(?!\.[\w]+)/gi;
let string =
  'hi @simon, how are you, @steve. shoutout to @barney, @george, @skywalker77, @tester_89, @invalid-19. Please email to greatmagician@gmail.com?';

let result = string.match(regex);
console.log(result);
