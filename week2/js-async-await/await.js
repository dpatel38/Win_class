// returns a promise that resolves after the specified number of ms
function getRandomNumber(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms );

    });
}

// function that will print the numbers in correct order, with delays
async function print(num) {
    for (let i = 1; i <= num; i++) {

        await getRandomNumber(Math.random() * 1000); // wait 

        console.log(i); // print number
    }
}

print(10); // actually execute function