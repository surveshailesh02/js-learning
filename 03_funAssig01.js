 // 1. Named function with no argument and no return value
 console.log("============= function with no argument and no return value =============");
 function show() {
    console.log("Hello,You are my One Piece Of Family.");
 }
 show();
 function show1() {
 console.log("Don't You think the weather is great today?");    
 }
 show1();

 // 2. Named function with argument and no return value
 console.log("============= Function with argument (Personal Details) and no return value =============");
 function  personalDetails(firstName) {
    console.log("First Name : ", firstName);
 }
 personalDetails("Shailesh");

 function personalDetails1(lastName) {
    console.log("Last Name :", lastName);
 }
 personalDetails1("Surve");

 function personalDetails2(collageName) {
    console.log("Collage Name :", collageName);
 }
 personalDetails2("R.F.Naik Vidhaylaya Bonkode, B.N.Bandodkar Collage");

 // 3. Named function with argument and return value
 // WAF to find the addition argument
 console.log("============= Function with argument (Addition Fuction ) and return value =============");
 function AdditionOfNum(numOne,numTwo,NumThree) {
    console.log("Addition Of Three Value is : ",numOne,numTwo,NumThree);
    var result = numOne+numTwo+NumThree;
    return result;
 }
 var Addition = AdditionOfNum(10.23,600,40);
 console.log("Addition is : ", Addition);

 function AdditionOfsentence(numOne,numTwo,NumThree) {
    console.log("Addition Of Three Sentence is : ",numOne,numTwo,NumThree );
    var result =numOne,numTwo,NumThree;
    return result;
 }
 var Addition = AdditionOfsentence("Hello","Good","Morning");
 
