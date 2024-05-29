function asyncIterator(){
    const array=[1,2,3];
    return {
        next: function(){
            if(array.length){
               return Promise.resolve({value:array.shift(),done:false});
            }
            else{
                return Promise.resolve({done:true});
            }
        }
    };
}
let output=asyncIterator();
(async function(){
    await output.next().then((res)=>{console.log(res)});
    await output.next().then((res)=>{console.log(res)});
    await output.next().then((res)=>{console.log(res)});
    await output.next().then((res)=>{console.log(res)});
})();
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { done: true }


//rest operator
let obj={
    firstname:'Radha',
    lastname:'radha',
    age:23,
    class:'MCA'
}
let {firstname,lastname,...rest}=obj;
console.log(firstname);//Radha
console.log(lastname);//radha
console.log(rest);//{ age: 23, class: 'MCA' }

//spread operator
let info={firstname,lastname,...rest};
console.log(info);//{ firstname: 'Radha', lastname: 'radha', age: 23, class: 'MCA' }

//Promise prototype finally
function testFinally() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFinally().then(() => console.log("resolved")).finally(() => console.debug("finally"))
  // resolved
  // finally