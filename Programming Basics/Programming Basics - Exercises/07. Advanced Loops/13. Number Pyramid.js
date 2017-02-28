/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    let number = Number(arr[0]);
    let currentNumber = 1;
    let globalString = "";

    for(var row = 1; row <= number; row++){
        var temp = "";
        for (let i = 1; i <= row; i++) {
            if (currentNumber === number + 1) {
                return globalString += temp;
            }
            temp += String(currentNumber) + " ";
            currentNumber++;

        }
        globalString += temp + "\n";
        temp = "";
    }
    console.log(globalString);
}