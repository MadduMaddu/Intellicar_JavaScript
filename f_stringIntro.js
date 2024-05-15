let myname="Maddu";
console.log(myname);

let s='maddu';
console.log(s);

//let s1="maddu';  -->not possible 

console.log(s[0]);
console.log(s[1]);

//template literals
let boy1="madhu"
let boy2="nikhil"
let sentence=`boy1 is friend of boy2`;
console.log(sentence);

//string interpolation
//we can insert variables into template literals directly.
//this is called string interpolation
let name1="Maddu";
let sent=`hii this is ${name1}`;
console.log(sent);//hii this is Maddu

//escaping character
let es="Maddu\"maddu";
console.log(es);
es="Maddu\\maddu";
console.log(es,"length is",es.length);


