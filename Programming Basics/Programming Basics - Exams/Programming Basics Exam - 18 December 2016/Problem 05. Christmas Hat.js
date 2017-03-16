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
    let rowLength = ( workingArr[0] * 4 )+ 1;
    let rowNumbers = ( workingArr[0] * 2 ) + 5;
    let part1 =  Array( ( (rowLength - 3) / 2 ) + 1 ).join(".");
    let peak =
            part1 + "/|\\" + part1 + "\n" +
            part1 + "\\|/" + part1 + "\n" +
            part1 + "***" + part1 + "\n";
    let body = "";
    for(let i = 1; i <= ( arr[0] * 2 ) - 1; i++){
        body += `${Array( (rowLength -5) / 2 + 2 - i).join(".")}*${Array(i + 1).join("-")}*${Array(i + 1).join("-")}*${Array( (rowLength -5) / 2 + 2 - i).join(".")}` + "\n";
    }
    console.log(peak + body);
};


