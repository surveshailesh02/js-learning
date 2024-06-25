

console.log(`============ Step 1 =================`);
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers.reverse();
console.log(`To Reverse The Array No Is : ${arrayRollNumbers}`);


console.log(`============ Step 2 =================`);
arrayRollNumbers.sort();
console.log(`Using Sort Logic Custom Method Is : ${arrayRollNumbers}`);


console.log(`============ Step 3 =================`);
arrayRollNumbers.sort((n1,n2)=>{
   return n1>n2 ? 1 : -1 ;
});
console.log(`Asending Order From Array No. Is : ${arrayRollNumbers}`);


console.log(`============ Step 4 =================`);
const len = arrayRollNumbers.length;
console.log(`The Greatest No From Array Is : ${arrayRollNumbers[len-1]}`);


console.log(`============ Step 5 =================`);
const element0th = arrayRollNumbers[0];
console.log(`The Smallest No From Array Is : ${element0th}`);


console.log(`============ Step 6 =================`);
let arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumber = [...new Set(arrayRollNumber)];
console.log(`To Remove Duplicate Element from Array Is : ${arrayRollNumber}`);