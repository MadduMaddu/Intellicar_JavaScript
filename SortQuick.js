let a=[23,32,12,21,43,34,26,62,44,2];
const quick=(a,st,en)=>{
    if(st>=en)
        return;
    let i=st,j=en;
    let piv=Math.floor((i+j)/2);
    while(a[i]<a[piv])i++;
    while(a[j]>a[piv])j--;
    if(i<j){
        let temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    }
    i++;
    j--;
    quick(a,st,j);
    quick(a,i,en);
}
console.log(a);
quick(a,0,a.length-1);
console.log(a);