const factorial=n=>{
    if(n<=1)
        return 1;
    return n*factorial(n-1);
}
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
//time complexity ---O(n)--> bcz the count of  calling the same function is dependent on input 