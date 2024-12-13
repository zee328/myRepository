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


//2,code:

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
