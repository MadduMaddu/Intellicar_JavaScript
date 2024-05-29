setTimeout(function(){
    console.log("Hello World.1....!");
    
},100);
setTimeout(function(){
    console.log("Hello World.2....!");
    
},1000);
//console.log(radha);//ReferenceError: radha is not defined 
// if we do like this the execution flow will stop there only
// to handle this we can use try catch

try{
    console.log(radha);
}
catch(error){
    console.log(error);
}
//now although getting exception also we can run remaining program
//what if we put asynchronous code in try

try{
    setTimeout(function(){
        //console.log(rahul);//now it will error bcz the function will be sheduled , at that we don't have guarranty to be catch executed
        console.log("asynchronous code");
    },1000);
}catch(error){
    console.log(error);
}
console.log("helooo");

// to over come this again we have to put that statement in try and catch
//ERROR object has three properties 
//name, message, stack
try{
    radha;
}
catch(error){
    console.log(error.message);//radha is not defined
    console.log(error.name);//ReferenceError
    console.log(error.stack);
    // ReferenceError: radha is not defined
    // at Object.<anonymous> (/home/maddu/Desktop/Intellicar/Intellicar_JavaScript/exceptions.js:36:5)
    // at Module._compile (node:internal/modules/cjs/loader:1356:14)
    // at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    // at Module.load (node:internal/modules/cjs/loader:1197:32)
    // at Module._load (node:internal/modules/cjs/loader:1013:12)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    // at node:internal/main/run_main_module:28:49
}


try{
    throw new Error("harry is not good");
}
catch(error){
    console.log(error.message);//harry is not good
    console.log(error.name);//Error
    console.log(error.stack);
    // Error: harry is not good
    // at Object.<anonymous> (/home/maddu/Desktop/Intellicar/Intellicar_JavaScript/exceptions.js:54:11)
    // at Module._compile (node:internal/modules/cjs/loader:1356:14)
    // at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    // at Module.load (node:internal/modules/cjs/loader:1197:32)
    // at Module._load (node:internal/modules/cjs/loader:1013:12)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    // at node:internal/main/run_main_module:28:49
}

// user also can throw exceptions
let age=35;
try{
    if(age>15){
        throw new Error("Invalid Age");
    }
}
catch(error){
    console.log(error.message);//Invalid age
}


//finally --will execute whether there is an error or not 

try{
    //console.log(radha);
    console.log("executed try");
}
catch(error){
    confirm.log(error.message);
}
finally{
    console.log("finally executed");
}