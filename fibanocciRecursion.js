const fib=[0,1,1,2,3,5,8,13,21];
const fibanocci=n=>{
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    return fibanocci(n-1)+fibanocci(n-2);
}
console.log(fibanocci(0));
console.log(fibanocci(1));
console.log(fibanocci(6));
console.log(fibanocci(8));