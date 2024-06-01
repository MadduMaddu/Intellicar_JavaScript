let weakset=new WeakSet();
let obj1={};
let obj2={name:'Radha',age:23};
weakset.add(obj1);
weakset.add(obj2);
console.log(weakset);
console.log(weakset.has(obj2));
weakset.delete(obj1);
console.log(weakset.has(obj1));
console.log(weakset);

let weakMap = new WeakMap();
let key1 = {};
let key2 = {};

weakMap.set(key1, 'value1');
weakMap.set(key2, 'value2');
console.log(weakMap.get(key1)); // 'value1'
console.log(weakMap.get(key2)); // 'value2'
console.log(weakMap.has(key1)); // true
console.log(weakMap.has(key2)); // true
weakMap.delete(key1); // Removes the key-value pair with key1
console.log(weakMap.has(key1)); // false


const seenObjects = new WeakSet();

function uniqueProcess(obj) {
    if (!seenObjects.has(obj)) {
        seenObjects.add(obj);
        // Perform unique operation
        console.log('Unique processing');
    } else {
        console.log('Already processed');
    }
}

let ob1 = { id: 1 };
let ob2 = { id: 2 };

uniqueProcess(ob1); // Unique processing
uniqueProcess(ob1); // Already processed
uniqueProcess(ob2); // Unique processing
