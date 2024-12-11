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
