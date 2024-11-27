const fruits=['apple','orange','banana','apple', 'banana'];
 const mySet= new Set(fruits);
 console.log(mySet);
 //2. adding value
 mySet.add('cherry','straberry','berry');//not accepting multiple values
 console.log(mySet);
 //3.deleting values
 mySet.delete('banana');
 console.log(mySet);
 //4.checking vlaues
 console.log(mySet.has('apple'));
 console.log(mySet.has('goobhi'));

 //set://  collection of unique values; no duplicates, no indexing, and no direct sorting.
