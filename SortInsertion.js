const a=[32,23,45,54,12,21,5,56,33];
const insersion=arr=>{
    for(var i=1;i<arr.length;i++){
        let curr=arr[i];
        j=i-1;
        while(j>=0&&arr[j]>curr){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=curr;
    }
}
console.log(a);
insersion(a);
console.log(a);