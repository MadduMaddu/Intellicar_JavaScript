const array=[1,2,2,3,4,5];
const set=new Set(array);
console.log(array);//[ 1, 2, 2, 3, 4, 5 ]
console.log(set);//Set(5) { 1, 2, 3, 4, 5 }

//to get unique elements from the array as an array
console.log([...new Set(array)]);//[ 1, 2, 3, 4, 5 ]

set.add(6);
console.log(set);//Set(6) { 1, 2, 3, 4, 5, 6 }
set.add(6);
console.log(set);//it wont add //Set(6) { 1, 2, 3, 4, 5, 6 }

//adding strincg or char
set.add('6');
console.log(set);//Set(7) { 1, 2, 3, 4, 5, 6, '6' }

//adding object
set.add({name:'Radha'});
console.log(set);//Set(8) { 1, 2, 3, 4, 5, 6, '6', { name: 'Radha' } }

//adding array
set.add([1,2,3]);
console.log(set);//Set(9) { 1, 2, 3, 4, 5, 6, '6', { name: 'Radha' }, [ 1, 2, 3 ] }

//deleting 
set.delete('6');
set.delete(3);
console.log(set);//Set(7) { 1, 2, 4, 5, 6, { name: 'Radha' }, [ 1, 2, 3 ] }

//has()-- checking the value presence in set
console.log(set.has(5));//true
console.log(set.has(3));//false

//size()
console.log(set.size);//7
console.log(set[3]);//undefined

//clear()
set.clear();
console.log(set);//Set(0) {}

//MAP--------------------------------------------------------------------
//in map we can store data in key and value pairs

let map=new Map([['name','Radha'],['gender','female']]);
console.log(map);//Map(2) { 'name' => 'Radha', 'gender' => 'female' }

//to add another pair
map.set('age',24);
console.log(map);//Map(3) { 'name' => 'Radha', 'gender' => 'female', 'age' => 24 }

map.set('name','Krish');
console.log(map);//Map(3) { 'name' => 'Krish', 'gender' => 'female', 'age' => 24 }
//it will not add duplicate key , so it will update previous key's value

//deleting - by providing key
map.delete('age');
console.log(map);//Map(2) { 'name' => 'Krish', 'gender' => 'female' }

//checking the key appearence, dont provide value
console.log(map.has('name'));//true
console.log(map.has('Krish'));//false

//size
console.log(map.size);//2

//to clear
map.clear();
console.log(map);//Map(0) {}

