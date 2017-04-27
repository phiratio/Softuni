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
    let a =  workingArr[0] * ( workingArr[1] / 60 );
    let b = ( workingArr[0] * 1.1 ) * ( workingArr[2] / 60 );
    let c = ( ( workingArr[0] * 1.1 ) * 0.95 ) * (workingArr[3] / 60);
    console.log(
        (a + b + c).toFixed(2)
    );
};