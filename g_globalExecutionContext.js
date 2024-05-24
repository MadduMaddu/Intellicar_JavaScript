//here first memory will be allocated for a,b and f1
//for a,b first it will assign undefined,in the code execution phase it will initialize values
var a=10;
var b=10;
f1();
function f1(){
    var a=20;
    console.log(a);//20
}
console.log(a);//10
console.log(b);//10
//when we run java Script code. Global execution context is created.
//it comprises of two phases one is memory allocation and the other is code execution phase
//in JS before executing the code first the memory will be allocated for the variables

//PROCESS
//it will create one call stack and creates GEC it pushes into call stack
//IN MEMORY ALLOCATION---a=undefined, b=undefined, f1={same as it is }
//IN CODE EXECUTION
//a=10
//b=10;
//f1 is calling so for f1 again it will create Execution context and pushes into call stack
//          MEMORY ALLOCATION--a=undefined
//          CODE---a=20
//          prints 20(a) this is the end of the funtion so it pops the f1 execution context from call stack 
//                      memory will be deallocated
//prints 10(a)
//prints 10(b)
//end of the program so it will pops the Global EC from the call stack

