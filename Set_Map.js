let set=new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set);
console.log(set.has(2));
set.delete(2);
console.log(set.has(2));
console.log(set.size);
set.add(2);
set.add(4);
set.add(5);
for(let num of set){
    console.log(num);
}
console.log("---------------------------");
set.forEach((num)=>console.log(num));
set.clear();
// Set(3) { 1, 2, 3 }
// true
// false
// 2 1 3 2 4 5
// ---------------------------
// 1 3 2 4 5
console.log("=========================")
let map=new Map();
map.set('name','Radha');
map.set('name1','Krish');
map.set('name','Ram');
console.log(map);
console.log(map.has('name'));
console.log(map.get('name'));
for(let [key,value] of map){
    console.log(`${key} ${value}`);
}
console.log("=====================");
map.forEach((key,value)=>console.log(`${key} ${value}`));
map.delete('name');
console.log(map.has('name'));
map.clear();
console.log(map);
// Map(2) { 'name' => 'Ram', 'name1' => 'Krish' }
// true
// Ram
// name Ram
// name1 Krish
// =====================
// Ram name
// Krish name1
// false
// Map(0) {}