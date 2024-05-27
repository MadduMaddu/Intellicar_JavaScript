const fruits=["applee","bananaa","mango","pineapple"];
var apple=fruits[0];
var banana=fruits[1];
console.log(apple,banana);

//the same thing we can do with array destructuring as follows
//here we can give any name to the varible
 var [fruit1,fruit2]=fruits;
 console.log(fruit1,fruit2);

 //if i want 1st and 3rd fruit name, i will just provide space in the 2nd index

 var [f1, ,f3]=fruits;
 console.log(f1,f3);

 //if i want all fruits except 2nd one , ican use rest operator
 var [fr1, ,...rests]=fruits;
 console.log(fr1);//applee
 console.log(rests);//[ 'mango', 'pineapple' ]


 //example by combining arrays and objects--array of objects
 const grocery=[
    {item:'Apples',price: 23,category: 'fruits'},
    {item:'banana',price:30,category: 'fruits'},
    {item:'tomatoes',price: 40,category: 'veg'},
    {item:'milk',price:25,category:'misc'},
    {item:'bread',price:15,category:'misc'}
 ];
 console.log(grocery[0].item);//Apples
 console.log(grocery[1].item);//banana

 //to access using destructuring
 var [f1]=grocery;
 console.log(f1);//{ item: 'Apples', price: 23, category: 'fruits' }
 var {item}=f1;
 console.log(item);//Apples

 var [{item}]=grocery;
 console.log(item);//Apples

 // if i want to get 3rd item
var [ , ,{item}]=grocery;
console.log(item);//tomatoes

var [, ,{item},...rest]=grocery;
console.log(item);
console.log(rest);
//   [
//     { item: 'milk', price: 25, category: 'misc' },
//     { item: 'bread', price: 15, category: 'misc' }
//   ]


//EXAMPLE for----array inside object
const company={
    name:"Google",
    locations:["Bnglr","Hyd","Chennai","Pune"]
};
console.log(company.locations[0]);//Bnglr
console.log(company.locations[1]);//Hyd

var {locations:[l1,l2]}=company;
console.log(l1,l2);
var {locations:[, ,l3,...rest]}=company;
console.log(l3);
console.log(rest);