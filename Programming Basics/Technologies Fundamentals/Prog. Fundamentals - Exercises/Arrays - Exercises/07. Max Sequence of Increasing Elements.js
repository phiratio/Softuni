/**
 * Created by Void-S on 25-Apr-17.
 */
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