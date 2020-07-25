const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0) {
        reader.question('Input a number:', function(num){
            //parseInt() parses a string and returns an integer
            const thisNumber = parseInt(num);
            sum += thisNumber;
            console.log(`This is the partial sum: ${sum}`);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}

addNumbers(0, 3, sum => {
    console.log(`Total Sum: ${sum}`);
    reader.close();
});
// reader.close();


// addNumbers(0, 3, function(sum) {
//     console.log(`Total Sum: ${sum}`);
//     reader.close();
// })

    



    
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
