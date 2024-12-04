//syntax:: functionName.apply(thisArg, [argsArray])

const obj={
    firstName:'John',
    lastName:'cena',
    greet: function(greeting){
            console.log(`${greeting} ${this.firstName} ${this.lastName}`);
    }
};
const obj2={
    firstName:'Dave',
    lastName: 'Batista',
};
obj.greet.apply(obj2,['hello']);


//2.

const airLine1={
    name:'Qatar Airline',
    jet :'Boeing A380',
    passengers:359,
    date:'21 sept',
    travel: function(pilot){

        console.log( `${pilot} drove ${this.name} carries ${this.passengers} at ${this.jet} on ${this.date}`);
    }
};
const airLine2={
    name:'Swiss Airline',
    jet:' Boeing 777',
    passengers:232,
    date:'07 July',
};
airLine1.travel.apply(airLine1, ['mike']);
airLine1.travel.apply(airLine2, ['Brett Lee']);

