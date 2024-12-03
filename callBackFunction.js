// A function that accepts a callback function, a callback function is a high order function 
//1.example:1 ..
function greet(name, callback) {
    console.log(`Hello, ' ${name}`);
    callback(); 
}
// A callback function that gets executed after greet is called
function sayGoodbye() {
    console.log('Goodbye!');
}
// Calling the greet function with sayGoodbye as the callback
greet('Alice', sayGoodbye);
//2.example :
function operat(sayHi, op){
    console.log(`hey, ${sayHi}`); 
    
    console.log('Result of multiplication:',(op[0]*op[1]));
}
function multiply(x, y){
    return x * y; 
}
operat('Zee', [3, 4]);



