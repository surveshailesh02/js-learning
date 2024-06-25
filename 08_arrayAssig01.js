

 const arrayfruits_Seasonal = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 console.log(arrayfruits_Seasonal);

 console.log(`Length of the array, It means total number of elements in the array`);
 console.log(arrayfruits_Seasonal);

 console.log(`=== Step 1 ====`);
 console.log(`=== Accessing array values using index ====`);
 const element0th = arrayfruits_Seasonal[0];
 console.log(element0th);

 const len = arrayfruits_Seasonal.length;
 console.log(arrayfruits_Seasonal[len-1]);

 console.log(`=== Step 2 ====`);
 console.log(`=== Add elements in the beginning of array ====`);
 let array1 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 console.log(`Original Array: ${array1}`);

 array1.unshift("papaya");
 console.log(`After unshift(): ${array1}`);

 console.log(`=== Step 3 ====`);
 console.log(`=== Remove elements in the Reverse order of 2nd last element ====`);
 const array2 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 const deletedelement = array2.splice(3,1);
 console.log(array2);

 console.log(`=== Step 4 ====`);
 console.log(`=== Add elements in the last position of array ====`);
 let array = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 console.log(`Original Array: ${array}`);

 array.push("pineapple");
 console.log(`After push(): ${array}`);

 console.log(`=== Step 5 ====`);
 console.log(`Only Insert an element without removing any existing element`);
 var array3 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 console.log(`Original Array: ${array3}`);
 const insertelement = array3.splice(4, 0, ("Dragon Fruit"));
 console.log(array3);

 console.log(`=== Step 6 ====`);
 console.log(`Only Replace an element with removing any existing element`);
 var array3 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 console.log(`Original Array: ${array3}`);
 const Replaceelement = array3.splice(1, 1, ("Kiwi"));
 console.log(array3);

 console.log(`=== Step 7 ====`);
 console.log(`Log The element Starting From 1 to 4`);
 var array3 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 const sliceFrom1To4 = array.slice(1, 4);
 console.log(`Original Array: ${array3}`);
 console.log(sliceFrom1To4);

 console.log(`=== Step 8 ====`);
 console.log(`Log To Select Last Three Element Array : Use the length property`);
 var array3 = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
 const sliceFrom2 =array3.slice(2);
 console.log(`Original Array: ${array3}`);
 console.log(sliceFrom2);


