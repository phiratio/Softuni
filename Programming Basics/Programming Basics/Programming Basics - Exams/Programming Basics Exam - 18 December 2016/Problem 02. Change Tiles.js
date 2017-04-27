/**
 * Created by Void-S on 15-Mar-17.
 */
function solve(arr) {
    let utilities = (function () {
        let helperApi = {
            arraySummer: function (array) {
                return array.reduce(function (a, b) {
                    return a + b;
                }, 0);

            },
            getMaxOfArray: function (numArray) {
                return Math.max.apply(null, numArray);
            },
            getMinOfArray: function (numArray) {
                return Math.min.apply(null, numArray);
            },
            makeAllArrayElementsNumbers: function (array) {
                return array.map(function (x) {
                    return parseFloat(x);
                });
            },
            factoriel: function (num) {
                if (num === 0) {
                    return 1;
                } else {
                    return num * rFact(num - 1);
                }
            }
        };
        return helperApi;
    })();

    let workingArr = utilities.makeAllArrayElementsNumbers(arr);
    let floorArea = workingArr[1] * workingArr[2];
    let tileArea = workingArr[3] * ( workingArr[4] / 2 );
    let requiredTiles = Math.ceil(( floorArea / tileArea )) + 5;
    let totalSumRequired = ( requiredTiles * workingArr[5] ) + workingArr[6];
    let difference =  Math.abs( workingArr[0] - totalSumRequired );
    workingArr[0] > totalSumRequired ?
        console.log(`${difference.toFixed(2)} lv left.`) :
        console.log(`You'll need ${difference.toFixed(2)} lv more.`);
};
