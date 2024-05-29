//async, await--------------------------------------

//before es8 we have to write like this
function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dogWalked=false;
            if(dogWalked){
                resolve("dog walked");
            }
            else{
                reject("dog did not walked");
            }
        }, 1500);
    });
}
function doChores(){
    return new Promise((resolve,reject)=>{
        const dochores=true;
        if(dochores){
            resolve("walking completed , doing chores");
        }
        else{
            reject("not doing chores");
        }
    });
}
// walkDog().then((output)=>{
//     console.log(output); 
//     return doChores().then(output=>{
//         console.log(output);   });

// });


//now can do
async function sleep(){
    try{
    const walkdogres=await walkDog();
    console.log(walkdogres);
    const dochoresres=await doChores();
    console.log(dochoresres);
    }
catch(error){
    console.log(error);//dog did not walked 
}
}
sleep();



//Object.values()------------------------------------
//Returns all the values of the Object’s own properties, excluding inherited values.
const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.values(exampleObj)); // [1, 2, 3, 4];
// To do the same thing before, use the following notation. much verbose
const values = Object.keys(exampleObj).map(key => exampleObj[key]);



//Object.entries()---------------------------------------------
//Returns the enumerable key, the value of the incoming object itself.
const exampleObj1 = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(exampleObj1)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

// Usually used with for
for (const [key, value] of Object.entries(exampleObj1)) {
	console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4

//String padStart() & padEnd()-------------------------------
//You can add other content to the beginning or end of the string and fill it to the specified length.
//SYNTAX=====>String.padStart(fillingLength, FillingContent);

// padStart
console.log('100'.padStart(5, 0)); // 00100
// If the content to be padded exceeds the "padding length".
// Then fill in from the left to the upper limit of the length
console.log('100'.padStart(5, '987')); // 98100

// padEnd
console.log('100'.padEnd(5, 9)); // 10099
// If the content to be padded exceeds the "padding length". 
//Then fill in from the right to the upper limit of the length
console.log('100'.padEnd(5, '987')); // 10098


//Trailing commas:
//arrays
const arr = [
    1,
    2,
    3,
  ];
  console.log(arr); // Output: [1, 2, 3]
//objects--
const obj = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
  };
  console.log(obj);
  // Output: { name: 'Alice', age: 25, occupation: 'Engineer' }
//function parameters--
function myFunction(
    param1,
    param2,
    param3,
  ) {
    console.log(param1, param2, param3);
  }
  myFunction(
    'a',
    'b',
    'c',
  );
    

//Object.getOwnPropertyDescriptors()
const exampleObj2= {a: 1, b: 2, c: 3, d:4};
console.log(Object.getOwnPropertyDescriptors(exampleObj2));
// a b c
// {
//   a: { value: 1, writable: true, enumerable: true, configurable: true },
//   b: { value: 2, writable: true, enumerable: true, configurable: true },
//   c: { value: 3, writable: true, enumerable: true, configurable: true },
//   d: { value: 4, writable: true, enumerable: true, configurable: true }
// }

