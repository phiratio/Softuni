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
    let rowLength = workingArr[0] * 3;
    let top = "";
    let bott1 = "";
    let stars = Array(workingArr[0] / 2 + 1).join(".") + Array( rowLength - workingArr[0] + 1).join("*") + Array(workingArr[0] / 2 + 1).join(".") + "\n";
    let mid = Array(workingArr[0] * 2 + 1).join(
        Array(workingArr[0] /2 + 1).join(".") + "|" +
        Array( rowLength - workingArr[0] - 1 ).join("\\") + "|" +
        Array(workingArr[0] /2 + 1).join(".") + "\n"
    );

    /// top part loop
    for (let i = 1; i <= workingArr[0]; i++) {
        top += Array(rowLength / 2 - 2 / 2 * i + 1).join(".") + "/" +
            Array((i - 1) * 2 + 1).join(" ") + "\\" +
            Array(rowLength / 2 - 2 / 2 * i + 1).join(".") + "\n";

    }
    ///bott part loop
    for (let i =0; i < workingArr[0] / 2; i ++){
        let pew = workingArr[0] / 2 + 1 - i;
        bott1 +=
            Array(pew).join(".") + "/" +
            Array( rowLength - pew - pew + 1).join("*") + "\\" +
            Array(pew).join(".") + "\n";
    }
    console.log(top + stars + mid + bott1);

};