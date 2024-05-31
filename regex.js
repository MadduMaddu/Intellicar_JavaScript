let str="Maddu Madhavi Maddu Madhu";
let reg=/Maddu/g;
console.log(str.replace("Maddu","Radha"));//Radha Madhavi Maddu Madhu

console.log(str.replace(reg, "Radha"));//Radha Madhavi Radha Madhu

let reg1=/a/g;
console.log(str.replace(reg1,"A"));//MAddu MAdhAvi MAddu MAdhu
