//1.setting map
const personMap= new Map();
{
personMap.set('name' ,'Batista');
personMap.set('contact', '03123323');
personMap.set('postcode','LS12');
}
console.log(personMap);

//2. retriving properties
console.log(personMap.get('name'));
console.log(personMap.get('contact'));

//3. checking properties
personMap.forEach((value,key)=>{
    console.log(`${key}, ${value}`);
});
//4.deleting properties
personMap.delete('contact');
console.log(personMap);

//5.checking size
console.log(personMap.size);
//6.clear 
personMap.clear();
console.log(personMap.size);
