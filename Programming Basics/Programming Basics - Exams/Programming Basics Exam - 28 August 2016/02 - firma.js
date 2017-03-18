/**
 * Created by void on 18.3.2017 г..
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
    let workignHours = workingArr[1] * 0.9 * 8;
    let extraHours = workingArr[2] * 2 * workingArr[1];
    let totalHours = Math.floor(workignHours + extraHours);
    let outcome = Math.abs(workingArr[0] - totalHours);
    workingArr[0] > (totalHours) ?
        console.log(`Not enough time!${outcome} hours needed.`):
        console.log(`Yes!${outcome} hours left.`);
};