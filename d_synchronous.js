function f1()
{
    f2();
    console.log("I am F1");
}
function f2()
{
    
    console.log("I am F2");
}
function f3()
{
    f1();
    console.log("I am F3");
}
f3();