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
                    return num * utilities.factoriel(num - 1);
                }
            }
        };
        return helperApi;
    })();
    let workingArr = utilities.makeAllArrayElementsNumbers(arr);
    let monthlySalary = workingArr[0] * workingArr[1];
    let yearIncome = monthlySalary * 14.5;
    let incomeWithoutTax = yearIncome * 0.75;
    console.log(`${(incomeWithoutTax / 365 * workingArr[2]).toFixed(2)}`);
}