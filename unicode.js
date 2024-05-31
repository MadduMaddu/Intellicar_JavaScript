//to get unicode of char from string
const str="ABCD";
console.log(str.charCodeAt(0));//65

//to get char of a unicode
const num=65;
console.log(String.fromCharCode(num));//A
console.log(String.fromCharCode(num, 66,67));//ABC

//to get unicode of char
console.log('A'.charCodeAt(0));