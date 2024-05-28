let user1={
    name:'Radha',
    age:24,
    address:"Bangalore"

}
let user2={
    name:'Krish',
    age:25,
    address:"Hyd"
}
function update(name){
    this.name=name;
}
function getDetails(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
}
//let details=[]
getDetails.apply(user2);
update.apply(user2,['Ram']);
getDetails.apply(user2);