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
    let pricelist = {
        magnoliq : 3.25,
        roza : 3.5,
        zombol : 4.0,
        kaktos : 8.0
    };
    debugger;
    let textSnippet = ["She will have to borrow", "She is left with"];
    let priceWithTax =
        ( workingArr[0] * pricelist.magnoliq +
        workingArr[1] * pricelist.zombol +
        workingArr[2] * pricelist.roza +
        workingArr[3] * pricelist.kaktos ) * 0.95;
    let kinti = Math.abs(workingArr[4] - priceWithTax);
    priceWithTax > workingArr[4] ?
        console.log(`${textSnippet[1]} ${Math.floor(kinti.toFixed(2) )} leva.`) :
        console.log(`${textSnippet[0]} ${Math.ceil( kinti.toFixed(2) )} leva.`);
}
