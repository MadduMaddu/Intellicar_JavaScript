function a() {
    var a1=10;
    c();
    function c (){
        console.log(a1);
    }
}
a();
//console.log(a1); it will give Reference Error bcz

// when we run Js code it will create lexical env along with the GEC
// here for c lexical env is its EC and it's parent[a] EC
// for a it's GEC and its parent[Global] GEC
//for GEC it's parent EC will point to null

//so when we access any variable first it will search its EC if not found it will search in it's parent EC

//in this after memory allocating a is calling
// for a memory will allocate and initialize a1=10
//c is calling , memory will allocate after that
//we are printing a1 , so first it will search in c lexical env , there is no a1
// so it will search in it's parent lexical env , there it is, find it will print
//and it will re turn to it's calling 

