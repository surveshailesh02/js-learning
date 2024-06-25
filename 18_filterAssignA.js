
console.log(`================= Step 1 ===================`);
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const newArray = arrayNumbers.filter( (element)=>{
    if (element>50) {
    }
    return element>50;
});
console.log(`The Greater Than 50 No is : ${newArray}`);


console.log(`================= Step 2 ===================`);
const newArr =  arrayNumbers.filter( (element)=> {
  if (element%2==0) {
    
  }
  return element%2==0;
});
console.log(`The Even No is : ${newArr}`);

console.log(`================= Step 3 ===================`);
const newArr1 = arrayNumbers.filter( (element)=>{
 if (element%2==1) {
    
 }
 return element%2==1;
});
console.log(`The Odd No is : ${newArr1}`);

console.log(`================= Step 4 ===================`);
const newArr2 = arrayNumbers.filter((element)=>{
 if (element%5==0) {
    
 }
 return element%5==0;
});
console.log(`The No Multiple Of 5 is : ${newArr2}`);

console.log(`================= Step 5 ===================`);
const newArr3 = arrayNumbers.filter((element)=>{
    if (element>=20 && element<=50) {
       
    }
    return element>=20 && element<=50;
   });
   console.log(`The No in Between 20 & 50 is : ${newArr3}`);


