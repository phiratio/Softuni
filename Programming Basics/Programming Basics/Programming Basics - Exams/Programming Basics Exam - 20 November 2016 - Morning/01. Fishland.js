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
    let palamud = ( workingArr[0] + workingArr[0] * 0.6 ) * workingArr[2];
    let safrid = ( workingArr[1] + workingArr[1] * 0.8 ) * workingArr[3];
    let midi = workingArr[4] * 7.5;
    console.log( (palamud + safrid + midi).toFixed(2));
};