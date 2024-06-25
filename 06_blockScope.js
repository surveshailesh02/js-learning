
if (true) {
    let message = "Hello";
    const PI    =  3.1413;
}
console.log(message); // Not allowed as variable 'message' and 'PI' defined
                      // using let and const keyword hence it has block scope

if (true) {
    var greet = "Good Morning";
}
console.log(greet); // Allowed as variable 'greet' defined
                    // using var keyword hence it has fuction scope