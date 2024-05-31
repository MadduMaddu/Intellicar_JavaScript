let a=[1,2,3,4,5,6];
let i=1;
let ar=[];
while(i<=20){
    let num=Math.floor(Math.random()*a.length+1);
    ar.push(num);
    i++;
}
let max=0;
let result=0;
ar.sort();
console.log(ar);
for(var j=0;j<ar.length;j++){
    var count=1;
    for(var k=j+1;k<ar.length;k++){
        if(ar[j]==ar[k]){
            count=count+1;
            ar[k]=0;
        }
    }
    if(count>max && ar[j]!=0){
        max=count;
        result=ar[j];
    }
}
console.log(`${result} occured ${max} times`);