
console.log(`=========== Step 1 ============`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element , index )=> {
    console.log(`the given element is : ${element}`, `the given index is : ${index}`);
});

console.log(`=========== Step 2 ============`);
  arrayNumbers.forEach(value => {
    if (value > 0) {
        console.log(`The Positive No are : ${value}`);
    }
  });

  console.log(`=========== Step 3 ============`);
  arrayNumbers.forEach(value => {
    if (value < 0) {
        console.log(`The Negative No are : ${value}`);
    }
  });

  console.log(`=========== Step 4 ============`);
  arrayNumbers.forEach(value => {
    if (value % 2 == 0) {
        console.log(`The Even No are : ${value}`);
    }
  });

  console.log(`=========== Step 5 ============`);
  let sum = 0;
  arrayNumbers.forEach(value => {
    sum = sum + value;
  });
  console.log(`The Sum of All Element is : ${sum}`);

  console.log(`=========== Step 6 ============`);
  arrayNumbers.forEach((currentValue,index )=> {
    if (index%2==0) {
        console.log(`Even Index Element is : ${currentValue} `);
    }
  });
  
