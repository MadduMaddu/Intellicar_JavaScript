let a=[[3,2,5],
        [6,3,8],
        [10,22,12]];
console.log(getCenter(a));
let b=[
        [1,2],
        [3,4]];
console.log(getCenter(b));
let c=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]];
console.log(getCenter(c));
function getCenter(a){
    if(a.length%2==0){
        return null;
    }
    let up=Math.floor(a.length/2);
    let down=Math.floor(a.length/2);
    return a[up][down];
}



