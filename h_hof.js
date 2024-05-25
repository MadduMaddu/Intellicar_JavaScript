//High Order Function:--A function which is accepting another function as an argument
function add(a,b,cb){//add if hof and cb is callback 
     cb(a+b);
}

add(20,30,(result)=>{
    console.log(result);
})


//printing squares
function printsquare(cb)
{
    for(var i=1;i<=5;i++)
        {
            let res=cb(i);
            console.log(res);
        }
}
function square(a){
    return a*a;
}
printsquare(square);

