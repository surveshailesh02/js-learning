

function isAnagram(str1,str2){
    var a=str1.split("").sort().join("");
    var b=str2.split("").sort().join("");
    console.log(a===b ? "The passed word is "+str1 +" and " + str2 + " which are Anagram " : "The passed word is "+ str1 +" and " + str2 + " which are not Anagram"
 
    );
 
 }
 isAnagram("evil","vile");
 isAnagram("silent","listen")
 isAnagram("gram","aram");
 isAnagram("mom","tom")