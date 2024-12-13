const personDetails={
name:'John Cena',
contact:0129342893,
hobbies:['reading', 'writing', 'jogging'],
address:{
city:'London',
postcode: 'WS14', 

},

};
console.log(personDetails);
personDetails.email=('johnecena@gmail.com'); // adding property
console.log(personDetails);
console.log(personDetails.address);
personDetails.address.postcode=('OL12');//updating property
console.log(personDetails.address);

delete personDetails.contact; // Deleting property
console.log(personDetails);


//summary: Adding properties: object.property = value
// Updating properties: object.property = newValue
// Deleting properties: delete object.property




//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// A function that accepts a callback function, a callback function is a high order function 
//1.example:1 ..
function greet(name, callback) {
    console.log(`Hello,  ${name}`);
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

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };
  
  Object.keys(person).forEach(key => {
    console.log(`Key: ${key}`);
  });
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


//looping through objects (keys, vales)
const openingHours = {
    Monday: { open: 9, close: 17 },
    Tuesday: { open: 9, close: 17 },
    Wednesday: { open: 9, close: 17 },
    Thursday: { open: 9, close: 17 },
    Friday: { open: 9, close: 18 },
    Saturday: { open: 10, close: 16 },
    Sunday: { open: 0, close: 0 }
  };
  
  console.log(Object.keys(openingHours));  
const values=Object.values(openingHours)[2];
  console.log(values);  
  const entries=Object.entries(openingHours);
  for (const [key, {open,close}] of entries)  
    
    
    console.log(`on ${key} we open at ${open} and close at ${close}`);



function greet(message, name) {
    console.log(`${message}, ${name}!`);
}

// Using apply() to call the greet function
greet.apply(null, ['Hello', 'Alice']);  // Output: "Hello, Alice!"


const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
};

// Borrowing the fullName method from the person object
console.log(person.fullName.apply(anotherPerson));  // Output: "Jane Smith"


const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);  // Output: 5


// Using call
greet.call(null, 'Hello', 'Alice');  // Output: "Hello, Alice!"

// Using apply
greet.apply(null, ['Hello', 'Alice']);  // Output: "Hello, Alice!"



//syntax: functionName.bind(thisArg, arg1, arg2, ...);
//bind method creates a new function

const person={
    name:'bob',
    greet: function(greeting){
        console.log(`${greeting} ${this.name}`);
    }
};
const anotherPerson={
    name:'james',
};
const x=person.greet.bind(anotherPerson);
console.log('hey' ,x);
x('hi');

//2. example
const airline = {
    name: 'swiss',
    travel: function(travelling) {
        console.log(`${travelling} ${this.name}`);
    }
};

const button = document.querySelector('button');
button.addEventListener('click', function() {
    airline.travel('Flying on'); // `this` is bound to `airline`
}.bind(airline));


function fetchData() {
    return new Promise(function(resolve, reject) { 
        setTimeout(() => {
            console.log('data fetched');  
            resolve('data is ready');  
        }, 2000);
    });
}

fetchData()   
.then(function(result) {   
    console.log(result);   
})
.catch(function(error) {   
    console.log('error', error);  
});
var xhr=new XMLHttpRequest();
xhr.open('GET', 'http//google.com/data',true);
xhr.onload=function(){
    if (xhr.status===200){
        console.log(xhr.responseText);
    } else {
        console.error('error'+xhr.status);
    }
};

async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('data fetched');
            resolve('data is ready');
        }, 1500);
    });
}

async function main() {
    const data = await fetchData();
    console.log(data);
}

main();

async function fetchUserData(){
return new Promise(resolve=> {
setTimeOut(()=> resolve ({user:'Mike' , balance:300}},2000);
}};
}
async function fetchProductData(){
return new Promise(resolve=> {
setTimeout(()=> resolve ({product:'Laptop' , price:900}),2000);
});
}
async function getData(){
try{ 
const [user,product]=await Promise.all([fetchUserData(), fetchProductData()]);
console.log('user info:', user);
console.log('Product Info:' product);
} catch(error){
console.log('Error:', error);
}
}
getData();
