const a1=[1,2,3,7,4,4,4];
const a2=[8,2,5,9,3];
const merge = [...a1, ...a2];
const result = merge.filter((item, index) => merge.indexOf(item) === index);
console.log(result); 
