function a(){
    for(var i=0;i<5;i++)
        {
            setTimeout(function(){
                console.log(i);// it will print all 5's
            })
        }
}
a();


function b(){
    for(let i=0;i<5;i++)
        {
            setTimeout(function(){
                console.log(i);//it will print 0 to 4
            })
        }
}
b();

function c(){
    for(var i=0;i<5;i++)
        {
            function closure(i){
                setTimeout(function(){
                    console.log(i);//here it will print 0 to 4
                })
            }
            closure(i);
        }
}
c();