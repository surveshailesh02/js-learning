
 var STEP1;
 console.log("===== STEP 1.1 =====");
 function squreOfWordLength(JavaScript) {
    var l1 = JavaScript.length;
    console.log(`The Length Of ${JavaScript} is: ${l1}`);
    var result = l1 * l1;
    console.log(`The Squre Of ${JavaScript}  is: ${result}`);
    return result;
 }
  var result = squreOfWordLength("JavaScript");

  var result = squreOfWordLength("GoogleChrome");

  var result = squreOfWordLength("DevloperSmart");
 


//  No Argument & No Return Value 
//  ============ STEP 2 ================
 var STEP2;
 console.log("===== STEP 2 =====");
 var str = "I am Angular Developer";
 console.log(str);

 var STEP2;
 console.log("===== STEP 2.1 =====");
 var len = str.length;
 console.log(`The Length is: ${len}`);

 var totalWords = str.split(" ").length;
 console.log(`The Total Words is : ${totalWords}`);

 var result = len / totalWords;
 console.log(`Divide By Result is : ${result}`);

 var STEP2;
 console.log("===== STEP 2.2 =====");
 var resultMul = len * totalWords;
 console.log(`Multiply Total No. Of Words is :${resultMul}`);