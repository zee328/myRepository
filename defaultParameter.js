// syntax:
// function functionName (parameter1=defaultValue , parameter2=defaultValue..){
// fuction body
// }
//1.
function greet(name='guest'){
    console.log(`Hey ${name}`);
}
greet('John');
greet();

//2. multiple parameters with default
function profile( name='not given' , age=25 , profession='developer'){
    console.log(`name: ${name}, age: ${age}, profession: ${profession}`);
}
profile('Cena', 37, 'athlete');
profile('guru',  55);
profile();

//3.default parameters and expression
function multiply(a, b=a){
    console.log(a*b);
}
multiply(3,5);
multiply(3); 


