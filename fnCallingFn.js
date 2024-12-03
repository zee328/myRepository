//functions returning other functions
function greet(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};
greet('hey')('zee') ;
