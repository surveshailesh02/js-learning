  var STEP1;
  console.log("===== STEP 1 =====");
 var isEvenOrOdd = function(num) {
  if (num%2==0) {
    console.log(`Given Number ${num} is "Even" `);
  } else {
    console.log(`Given Number ${num} is "Odd" `);
  }   
}
 isEvenOrOdd(45);
 isEvenOrOdd(70);
 isEvenOrOdd(67);
 isEvenOrOdd(98);

 var STEP2;
 console.log("===== STEP 2 =====");
 var voteEligibility = function (age) {
    if (age>=18) {
        console.log(`Given age ${age} is Eligible For Vote`);
    } else {
        console.log(`Given age ${age} is Not Eligible For Vote`);
    }
    
 }
 voteEligibility(18);
 voteEligibility(20);
 voteEligibility(17);
 voteEligibility(40);

 var STEP3;
 console.log("===== STEP 3 =====");
 var strLength = function(str) {
    if (str.length >=10) {
        console.log(`String "JavaScript" Contains 10 or more Than 10 Characters`);
    } else {
        console.log(`String "JavaScript" Dose Not Contain 10 or more Characters`);
    }
 }
 strLength("JavaScript")

 var STEP4;
 console.log("===== STEP 4 =====");
 var strLength = function (str) {
    if (str.startsWith("Java")) {
        console.log(`Given string ${str} starts with word "Java"`);
    } else {
        console.log(`Given string ${str} doesn't starts with word "Java"`);
    }
 }
 strLength("JavaScript Language");
 strLength("Programming Language");

 