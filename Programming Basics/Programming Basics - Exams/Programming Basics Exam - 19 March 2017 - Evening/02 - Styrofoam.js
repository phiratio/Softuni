/**
 * Created by Void-S on 19-Mar-17.
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
    let houseAreaWithoutWindowses = workingArr[1] - (workingArr[2] * 2.4);
    houseAreaWithoutWindowses = houseAreaWithoutWindowses * 1.1;

    let neededPackages = Math.ceil(houseAreaWithoutWindowses / workingArr[3]) ;
    neededPackages = neededPackages * workingArr[4];
    let outcome = Math.abs(workingArr[0] - neededPackages);
    if (workingArr[0] > neededPackages) {
        console.log(`Spent: ${neededPackages.toFixed(2)}
Left: ${outcome.toFixed(2)}`)
    } else {
        console.log(`Need more: ${outcome.toFixed(2)}`);
    }
};


/// solve([500,200,5,20,30]);