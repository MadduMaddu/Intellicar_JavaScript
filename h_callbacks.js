//callback function:---> passing a function as an argument to another funtion
function b(){
    console.log("b called");

}
function a(b){
    console.log("a called");
    b();
}

a(b);


//here we passing an arrow function as an argument to the settimeout
console.log("10");
setTimeout(() => {
    console.log("20");
}, 0);
console.log("30");

//here we are passing a function as an argument to the foreach
const names=['radha','krish','ram','sita'];
names.forEach((name)=>{
    console.log(name);
})


