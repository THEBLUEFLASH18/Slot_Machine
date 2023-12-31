
const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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
};

const getBet = function(balance, lines){
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
        if(isNaN(numberBet) || numberBet <=0 || numberBet > (balance / lines)){
        alert("The number of bets is inacurrate!") 
        }
        else{
            return numberBet
        }
    }
};





/*Even though i already used const depositAmount, i can use it again because the first one was a local 
scope declaration while this one below is a global scope declaration */

const spin = ()=>{
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count;i++){
            symbols.push(symbol)
        }
    }

    const reels = []
    for(let i = 0; i < COLS; i++){
        reels.push([])
        const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex,1)
        }
    }

    return reels
};


const transpose = (reels) =>{
    const rows = [];
    for(let i = 0; i < ROWS; i++){
        rows.push([])
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows 
};

const printRows = (rows) =>{
    for(const row of rows){
        let rowString = "";
        for(const [i,symbol] of row.entries()){
            rowString += symbol
            if(i != row.length -1 ){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
};

const getWinnings = (rows, bet, lines) =>{
    let winnings = 0;

    for(let row = 0; row < lines; row++){
        const symbols = rows[row]
        let allSame = true

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false
                break;
            }
        }

        if(allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]]   
        }
    }
    return winnings
};

const game = () =>{
    let balance = deposit();

    while(true){
        console.log("You have a balance of $" + balance)
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings
        console.log("you won, $" + winnings.toString())

        if(balance <= 0){
            console.log("You ran out of money!!")
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ")
        if(playAgain != y){
            break;
        }

    };
}

game();






