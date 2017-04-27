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
    let gradeArr = workingArr.slice(1);
    let averageGrades = gradeArr.reduce((acc, val ) => {
        return acc + val;
    }) / gradeArr.length;
    let twoThree = ( gradeArr.filter( (val) => {
        return val <= 2.99;
    }).length / gradeArr.length ) * 100;
    let threeFour = ( gradeArr.filter( (val) => {
        return val > 2.99 && val <= 3.99;
    }).length / gradeArr.length ) * 100;
    let fourFive = ( gradeArr.filter( (val) => {
        return val > 3.99 && val <= 4.99
    }).length / gradeArr.length ) * 100;
    let fiveSix = ( gradeArr.filter( (val) => {
        return val > 4.99
    }).length / gradeArr.length ) * 100;
    console.log (`
    Top students: ${fiveSix.toFixed(2)}%
    Between 4.00 and 4.99: ${fourFive.toFixed(2)}%
    Between 3.00 and 3.99: ${threeFour.toFixed(2)}%
    Fail: ${twoThree.toFixed(2)}%
    Average: ${averageGrades.toFixed(2)}
`);
};