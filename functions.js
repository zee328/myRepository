// Order 3 Higher-Order Function (returns a function that returns another function)
// const atm=(x)=>{
// return (y)=>{
//     return (z)=>{
//         return (x+y)*z;
//     };
// };
// };
// console.log(atm(2)(3)(4));

//2. function assigned to a variable
// const person=function (name){
//     return `${name}`;
// };
// console.log(person('alice'));

//3. assign function to an obj
// const person={
//     name:'cena',
//     greet: function(){
//         return (`hello , ${this.name}`);
//     }
// };
// console.log(person.greet());

//4.function stored in array
// const data= [
//   function() {return 'function 1 returned';},
//   function()  {return 'function 2 returned';}
// ];
// console.log (data[0]());
// console.log (data[1]());

//5. function passed as an argument
 function atm(a,b,x){
return x(a,b);
function add(){ return a+b;
}
function multiply(){
    return a*b;
}
};

console.log(x(2.3));

