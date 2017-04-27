/**
 * Created by Void-S on 17-Mar-17.
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
    let balo = workingArr[0] * workingArr[2];
    let malo = workingArr[0] * workingArr[3];
    let turt = workingArr[0] * workingArr[4] / 1000;
    let total = balo + malo + turt;
    let food = Math.abs(workingArr[1] - total);
    workingArr[1] >= total ?
        console.log(`${Math.floor(food)} kilos of food left.`):
        console.log(`${Math.ceil(food)} more kilos of food are needed.`);
};