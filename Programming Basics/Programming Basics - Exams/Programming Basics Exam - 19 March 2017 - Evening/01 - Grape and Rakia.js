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
    let kgGrozde = workingArr[0] * workingArr[1];
    let grozdeWithoutBrak = kgGrozde - workingArr[2];
    let rakiq = ( ( grozdeWithoutBrak * 0.45 ) / 7.5 ) * 9.8;
    let prodan = ( grozdeWithoutBrak * 0.55 ) * 1.5;
    console.log(`${rakiq.toFixed(2)}
${prodan.toFixed(2)}`);
};