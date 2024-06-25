
console.log(`======== Step 1 ========`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`Length of the array, It means total number of elements in the array`);
console.log(arrayNumbers.length);

console.log(`======== Step 2 ========`);
const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11];
const arrayNumbers0th = arrayNumbers1[0];
console.log(`The First Element is : ${arrayNumbers0th}`);
console.log(`The Last Element is : ${arrayNumbers.length-0}`);

console.log(`======== Step 3 ========`);
const arrayNumbers2 = [20,31,40,25,23,11,29,9,60,2,11];
 console.log(arrayNumbers2);
 console.log(arrayNumbers2.slice(arrayNumbers2.length-3));

 console.log(`======== Step 4 ========`);
 console.log(`......Log the even numbers......`);
let arrayNumbers3 = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers3.length; index++) {
    const element = arrayNumbers3[index];
    if (element%2==0) {
        console.log(element);
    }
}
 
console.log(`======== Step 5 ========`);
console.log(`......Log the Odd numbers......`);
let arrayNumbers4 = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers4.length; index++) {
    const element = arrayNumbers4[index];
    if (element%2!=0) {
        console.log(element);
    }
}

console.log(`======== Step 6 ========`);
console.log(`......Log the sum of Even Positioneted numbers......`);
let arrayNum= [20,31,40,25,23,11,29,9,60,2,11];
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (index%2==0) {
        sum = sum + element;
    }
}
console.log(sum);

console.log(`======== Step 7 ========`);
console.log(`......Log the sum of Odd Positioneted numbers......`);
let arrayNum1= [20,31,40,25,23,11,29,9,60,2,11];
let sum1 = 0;
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum1[index];
    if (index%2==1) {
        sum1 = sum1 + element;
    }
}
console.log(sum1);

console.log(`======== Step 8 ========`);
console.log(`The Sum the all elements From arrayNumbers is :`);
let arrayNum2= [20,31,40,25,23,11,29,9,60,2,11];
let sum2 = 0;
for (let index = 0; index < arrayNum2.length; index++) {
    const element = arrayNum2[index];
    sum2 = sum2 + element;
}
console.log(sum2);

console.log(`======== Step 9 ========`);
console.log(`The Numbers Multiple of 5 arrayNumbers is :`);
let arrayNum3= [20,31,40,25,23,11,29,9,60,2,11];
let sum3 = 0;
for (const element of arrayNum3) {
    if (element%5==0) {
        console.log(element);
    }
}

console.log(`======== Step 10 ========`);
var arrayNum4 = [20,31,40,25,23,11,29,9,60,2,11];
var result = arrayNum4.includes(115);
console.log(`Is 115 no. is Available in array Numbers: ${result}`);

console.log(`======== Step 11 ========`)
var arrayNum4 = [20,31,40,25,23,11,29,9,60,2,11];
var result = arrayNum4.includes(23);
console.log(`Is 23 no. is Available in array Numbers: ${result}`);

console.log(`======== Step 12 ========`)
const arrayNum5 = [20,31,40,25,23,11,29,9,60,2,11];
const InsertNumber = arrayNum5.splice(3,0,55,66);
console.log(arrayNum5);


console.log(`======== Step 13 ========`)
const arrayNum6 = [20,31,40,25,23,11,29,9,60,2,11];
const deleteNumber = arrayNum6.splice(4);
console.log(arrayNum6);