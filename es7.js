//Array.prototype.includes()

//Used to determine whether the array contains the specified value,
// if so, return true; otherwise, return false.
const arr = [1, 2, 3, 4, 5];
arr.includes(3); // true------Check if there is the number 3 in the array
if (arr.includes(3)) { console.log("true"); }
// ... Equivalent to the previous writing of indexOf
arr.indexOf(3); // 2 (return its array position)
// If you want to write it in the if, you must add `> -1`, which is not as clear as the include in ES7 in terms of semantics
if (arr.indexOf(3) > -1) { console.log("true"); }



//Exponentiation Operator
console.log(2**10); // 1024
// equal to
console.log(Math.pow(2, 10)); // 1024