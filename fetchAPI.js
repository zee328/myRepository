//syntax: 
fetch(url, options)
  .then(response => response.json()) // or response.text(), response.blob(), etc.
  .then(data => {
    // Handle data here
  })
  .catch(error => {
    // Handles error here
    console.error('Error:', error);
  });



  //
  async function fetchUserData(userID){
    return new Promise (function (resolve,reject){
        setTimeout(() => {
        if(userID===1){ resolve({name:'Mike', balance:2000});
    } else{ reject('user not found');}
            
        }, 2000);
    });
  } 

  async function getUserDetails(){
    try{
        //wait for the promise to resolve
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
}

  getUserDetails();