function a(){
    var x=10;
    function b(){
        console.log(x);
    }
    b();
}
a();


function a1(){
    var a=10;
    function b1(){
        console.log(a);
    }
    return b1;
}
var a=a1();
console.log(a);
a();//it wil print 10. bcz b1 func will store and remember along with its lexical scope.


function a2(){
    var a=10;
    function b2(){
        console.log(a);
    }
    a=300;
    return b2;
}
var a=a2();
console.log(a);
a();//it will print 300 bcz in b2 lexical scope a value is reinitialized with 300