/*
Create Regex to match URLs inside a string
 */

let regex = /http[s]?:\/\/[\w\-\.\/]+(:[\d]{0,5})?(#[\w\-\.]+)?/gi;

let string = `visit http://google.com to search stuffs 
  or https://youtube.com to watch videos from around the world. 
  Visit https://quip.com/***********/Training-v7 to get the syllabus of react bootcampt training`;

let result = string.match(regex);
console.log(result);
let ports = `visit http://localhost:3000 after you run yarn start. 
  You also can use anchor to directly go to certain parts of your web page.
  For example: https://localhost:14045#testArea`;
result = ports.match(regex);
console.log(result);
