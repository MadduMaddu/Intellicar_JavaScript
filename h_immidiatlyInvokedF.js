//Immidiatly invokde function


// function print(){
//     console.log("hello");
// }()  if we do like this it will show error
//for that we have to provide whole the function in one block

//(function declaration)(function calling)
(function print(){
    console.log("hello");
})();


//Ex:2
( () => {
    for(var i=0;i<5;i++)
        {
            console.log(i);
        }
} )();


//Ex:2
( (name)=>{
    console.log(name);
})('Radha');