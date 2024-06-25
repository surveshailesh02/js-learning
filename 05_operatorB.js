var STEP1;
console.log("===== STEP 1 =====");
 
 var greaterNumber = function greaterNumber(numOne, numTwo) {
      var  result  = numOne>=numTwo ? numOne : numTwo;
      console.log(`greater numbers between  ${numOne} and  ${numTwo} is : ${result} `);

}
greaterNumber(10,-10);
var greaterNumber = function greaterNumber(numOne,numTwo) {
    var result    = numOne>=numTwo ? numOne : numTwo;
    console.log(`greater numbers between ${numOne} and ${numTwo} is : ${result}`);
}
greaterNumber(800,899);

var STEP2;
 console.log("===== STEP 2 =====");
  var isEvenOrOddNum = function isEvenOrOddNum(argOne) {
    var result       = argOne%2 == 0 ? true : false;
    return result;
  }
  var returnValue    = isEvenOrOddNum(29);
  console.log(`Given number 29 is Even : ${returnValue}`);
  var returnValue    = isEvenOrOddNum(44);
  console.log(`Given number 44 is Even : ${returnValue}`);
  var returnValue    = isEvenOrOddNum(0);
  console.log(`Given number 0 is Even : ${returnValue}`);
  var returnValue    = isEvenOrOddNum(101);
  console.log(`Given number 101 is Even : ${returnValue}`);

  console.log("===== STEP 3 =====");
  function wordLength(argOne) {
  console.log(`The length of ${argOne} is ${argOne.length} and it is  ${argOne.length % 2==0 ? "Even number" : "Odd number"}`);
  }
   wordLength("JavaScript");
   wordLength("Google");
   wordLength("Developer smart");

   console.log("===== STEP 3 =====");
var wordLength = function wordLength(argOne) {
  
    var result = argOne.length % 2 == 0 ? "even number" : "odd number ";
    console.log(`The string is ${argOne} and length of string is ${argOne.length} which is ${result}`);
    return result;
}
var returnValue = wordLength("JavaScript");
var returnValue = wordLength("GoogleChrome");
var returnValue = wordLength("Developer Smart");