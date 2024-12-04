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
