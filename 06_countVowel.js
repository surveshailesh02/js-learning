

// console.log(`Count the total number of a character`);
// var word = "JavaScript";
// var counter = 0;
// for (let index = 0; index < word.length; index++) {
//     var ch = word.charAt(index);
//     if (ch=="a") {
//         counter ++;
//     }
// }
// console.log(`Total number of a is: ${counter}`);

console.log(`===== Step 1 =======`);
console.log(`==== Count The Total Number Of Vowels =======`);
 var str = "I am very good IT Developer";
 var Vowels = "aeiou";
 var counter = 0;
 for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (Vowels.includes(chLowerCase)) {
        counter++;
    }
 }
 console.log(counter);

 console.log(`===== Step 2 =======`);
 function sumOfCube() {
    console.log(`===== Sum Of Cube Of Numbers from 1 to 5`);
  var sumOfCube = 0;
  for (let i = 1; i <= 5; i++) {
    var cube = i * i * i;
    sumOfCube = sumOfCube + cube;
 }
  console.log(sumOfCube);
 }
 sumOfCube();

 console.log(`===== Step 3 =======`);
 function oddPositionedChars(str) {
    console.log(`===== Odd Position Char ======`);
    var str1 ="Hard work always pays back";
    var result = "";// 
    for (let index = 0; index < str.length; index++) {
        var ch = str.charAt (index);
        result = result + ch;
        if (index %2== 1 && ch != ' ') {
            console.log(ch);
        }
       
        
    }
 }
 oddPositionedChars("Hard work always pays back");
 oddPositionedChars("Soon I will be UI IT Champ");







