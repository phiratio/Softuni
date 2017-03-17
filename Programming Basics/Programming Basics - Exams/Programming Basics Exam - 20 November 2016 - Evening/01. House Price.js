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
    let sRoom = workingArr[0] * 1.1;
    let tRoom = sRoom * 1.1;
    let bathRoom = workingArr[0] / 2;
    let totalSize = workingArr[0] + workingArr[1] + sRoom + tRoom + bathRoom;
    let sizeWithCorideor = totalSize * 1.05;
    console.log( ( sizeWithCorideor * workingArr[2] ).toFixed(2) );
}


