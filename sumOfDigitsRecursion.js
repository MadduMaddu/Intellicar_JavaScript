const sumOfDigits=n=>{
    if(n<=0)
        return 0;
    return n%10+sumOfDigits(Math.floor(n/10));
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(222));
console.log(sumOfDigits(10112));
//here the count of function is calling itself is based on the digit count count of the input
//so The number of digits d in a number n is given by floor(log10(n)) + 1.
//O(log 10 n)
// in Big O notation --O(log n)
