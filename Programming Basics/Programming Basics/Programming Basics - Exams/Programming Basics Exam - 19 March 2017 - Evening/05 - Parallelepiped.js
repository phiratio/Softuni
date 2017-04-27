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
    let high = 4 * workingArr[0] + 4;
    let length = 3 * workingArr[0] + 1;
    let first = "";
    let mid1 = "";
    let mid2 = "";
    let last = "";

    first = "+" + Array(workingArr[0] - 1).join("~") + "+" + Array(length - workingArr[0] + 1).join(".") + "\n";
    last = Array(length - workingArr[0] + 1).join(".") + "+" + Array(workingArr[0] - 1).join("~") + "+";
    for(let i = 1; i <= (workingArr[0]*2)+1;i++){
        mid1+= "|" +
                Array(i).join(".") + "\\" +
                Array(workingArr[0] - 1).join("~") + "\\" +
                Array(length - workingArr[0] -i + 1).join(".") + "\n";
    }

    for(let i = 1; i <= (workingArr[0]*2)+1;i++){
        mid2+=
            Array(i).join(".") + "\\" +
            Array(length - workingArr[0] -i + 1).join(".") + "|" +
            Array(workingArr[0] - 1).join("~") + "|" + "\n"
    }



    console.log(first+mid1+mid2+last);
};