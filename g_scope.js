{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
//console.log(b);
//console.log(c); bcz let & const are block scope -- var is global scope


//shadowing
var a=200;
{
    var a=10;
    console.log(a);
}
console.log(a);




let b=20;
{
    //var b=30; not possible
    let b=30;
    console.log(b);
}
console.log(b);


const c=40;
{
    //var c=40; not possible
    const c=30;
    console.log(c);
}
console.log(c);

var d=10;
{
    let d=30;// it is possible
    console.log(d);
}
console.log(d);