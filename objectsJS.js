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