/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var convertedValue = Number(arr[0]);
    var bonusScores = calcScores(convertedValue);
    var totalScores = convertedValue + bonusScores;

    function calcScores(num) {
        var tempScores = 0;
        if (num > 1000) {
            tempScores += num * 0.1;
        } else if (num > 100) {
            tempScores += num * 0.2;
        } else if (num <= 100) {
            tempScores += 5;
        }

        if (num % 2 === 0) {
            tempScores += 1;
        } else if(num % 10 === 5) {
            tempScores += 2;
        }
        return tempScores;
    }

    console.log(bonusScores + "\n" + totalScores);
};