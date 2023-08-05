
const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        /* When this is true the infinite loop will continue until the person corrects the value they entered,
        if the value they entered is good then the else{} will just return the parseFloat() amount to te 
        function deposit  */
            const depositAmount = prompt("Please deposit an amount: ")
        /* parseFloat() can only return string(number) values into numbers, 
        if depositAmount gave us back a string it would produce a NAN(not a number) value*/
        const depositedAmount = parseFloat(depositAmount)
        if(isNaN(depositedAmount) || depositedAmount <= 0){
            alert("There is an improper value being used for the depost please check and correct!")
        }
        else{
            return depositedAmount
        }

    }
};


const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines to (1-3): ")
        const numberOfLines = parseFloat(lines)

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            alert("There is an improper value of lines being bet on!")
        }
        else{
            return numberOfLines
        }
    }
}

/*Even though i already used const depositAmount, i can use it again because the first one was a local 
scope declaration while this one below is a global scope declaration */

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();



