
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

deposit();