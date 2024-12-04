// Immediately Invoked Function Expressions (IIFEs) are anonymous functions mostly
// They are used once because sometimes we need functions that should not be used after they have been used once.
//An IIFE is a function expression, not a function declaration.
// function is executed immediately after it is defined. This is done by appending () after the function expression

//syntax: (function() { .....code here.....})();


//example: 1
(function (){
    console.log('this function runs immediately and , will not run again');
})
();

//example:2(to create a private scope)
(function(){
    const privateVariable='I am private';
    console.log(privateVariable);
}) ();
//console.log(privateVariable); //this will not work


//example 3: (IIFE with parameters)
( function (airline){
    console.log(`airline name is ${airline}`);
}) ('swiss');

// example 4:(IIFE with return value)
const result=( function(){
    return 'how I wonder what you are!';
}) ();
console.log(result);



