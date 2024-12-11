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
