
console.log(`========== Step 1 ==============`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const newarrayNumbers = arrayNumbers.map ((element)=>{
  return element + 10;
});
console.log(`Each Element adding 10 result is : ${newarrayNumbers} `);

console.log(`========== Step 2 ==============`);
const newArr = arrayNumbers.map( (element)=>{
    return element * element * element;
});
console.log(`The Cube Of Each Element Of Array is : ${newArr}`);

console.log(`========== Step 3 ==============`);
const newArray = arrayNumbers.map( (element,index)=>{
    return element + index;
});
console.log(`The index value adding corresponds element is : ${newArray}`);


