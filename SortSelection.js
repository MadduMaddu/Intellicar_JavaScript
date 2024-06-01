//we will loop through by finding small num in each iteration
const a=[23,21,45,73,2,6,1,76,43];
const insersion=a=>{
    const len=a.length;
    for(var i=0;i<len;i++){
        let small=i;
        for(var j=i+1;j<len;j++){
            if(a[small]>a[j]){
                small=j;
            }
        }
        if(i!=small){
            let temp=a[small];
            a[small]=a[i];
            a[i]=temp;
        }
    }
}
console.log(a);
insersion(a);
console.log(a);

