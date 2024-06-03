const ar=[3,4,1,7,2,5,9,6,8];
console.log(ar);

const bubblesort=arr=>{
    const len=ar.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-i;j++){
            if(ar[j]>ar[j+1]){
                let temp=ar[j];
                ar[j]=ar[j+1];
                ar[j+1]=temp;
            }
        }
    }
}

bubblesort(ar);
console.log(ar);
//here the complexity is based on the input so
//Best Case:    O(n)
//Average case: O(n^2)
//Worst Case:   O(n^2)



// 1st- [3,1,4,2,5,7,6,8,9]
// 2nd- [1,3,2,4,5,6,7,8,9]
// 3rd- [1,2,3,4,5,6,7,8,9]
