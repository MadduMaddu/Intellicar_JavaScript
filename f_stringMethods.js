let nam="Maddu";
//length property
console.log(nam.length);

//toUpperCase()
console.log(nam.toUpperCase());//MADDU

//toLowerCase()
console.log(nam.toLowerCase());//maddu

//slice()
nam="Maddu";
console.log(nam.slice(2));//ddu
console.log(nam.slice(2,4));//dd  it will not include 4th index


//replace()
nam="Maddu";
console.log(nam.replace("Ma","va"));
console.log(nam.replace("ma","va"));//it will not replace, because the exact string format is not find


//concat()
nam="Maddu";
let nam1="maddu";
console.log(nam.concat(" is a friend of ",nam1));

//trim()
nam="         MAddu     ";
console.log(nam);
console.log(nam.trim());

//charAt()
nam="Maddu";
console.log(nam.charAt(3));
console.log(nam.charAt(0));

//includes()
let s="I am Maddu Madhavi";
let word="am";
console.log(s.includes(word));
console.log(`the word ${word}, ${s.includes(word)?"is":"is not"} includes in the sentence`);

//split()--> it returns the elements as an array by using separator
s="abcdefg";
let arr=s.split('');
console.log(arr);
s="i am Am am Maddu am Madhavi";
arr=s.split('am');
console.log(arr);

//join()

console.log(arr.join());//it will give along with the ','
console.log(arr.join(''));


let str="Hello, Hi Everyone ,  How are you?";

console.log(str.split(','));//[ 'Hello', ' Hi Everyone ', '  How are you?' ]

console.log(str.split(' '));//[ 'Hello,', 'Hi', 'Everyone', ',', '', 'How', 'are', 'you?' ]
console.log(str.split(""));
// [
//   'H', 'e', 'l', 'l', 'o', ',', ' ',
//   'H', 'i', ' ', 'E', 'v', 'e', 'r',
//   'y', 'o', 'n', 'e', ' ', ',', ' ',
//   ' ', 'H', 'o', 'w', ' ', 'a', 'r',
//   'e', ' ', 'y', 'o', 'u', '?'
// ]

//to remove commas we can use patterns as follows
console.log(str.split(/,+/));//[ 'Hello', ' Hi Everyone ', '  How are you?' ]

//here we getting space before ' How are you?' and after 'Hi Everyone '----to remove this 
console.log(str.split(/\s*,+\s*/));//[ 'Hello', 'Hi Everyone', 'How are you?' ]

//to create array with limited elements from the string
console.log(str.split("",5));//[ 'H', 'e', 'l', 'l', 'o' ]








