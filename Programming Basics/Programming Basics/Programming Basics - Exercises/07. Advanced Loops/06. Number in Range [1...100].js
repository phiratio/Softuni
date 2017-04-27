/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr){
    let utilities = (function () {
        var helperApi = {
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
            }
        };
        return helperApi;
    })();
    arr.forEach(function (item) {
        if (Number(item) <= 100 && Number(item) >= 1) {
            console.log(`The number is: ${item}`);
        }
    });
}