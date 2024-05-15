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







