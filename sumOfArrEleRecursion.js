const ar=[1,2,3,4,5];
const sumOfEle=(arr,i)=>{
    if(i==arr.length)
        return 0;
    return arr[i]+sumOfEle(arr,i+1);
}
console.log(sumOfEle(ar,0));
//here the function calling is depend on the arr length
//O(a.length)
