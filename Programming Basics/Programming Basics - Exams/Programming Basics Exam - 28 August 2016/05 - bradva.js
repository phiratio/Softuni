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
    let totalLength = Number(arr[0]) * 5;
    let viso4ina = Number(arr[0]) * 2 - Number(arr[0]) % 2;
    let top = "";
    let mid = "";
    for( let i = 0; i < viso4ina / 2;i++){
        top +=
            Array(Number(arr[0]) * 3 + 1).join("-") + "*" +
            Array(i + 1).join("-") + "*" +
            Array(totalLength - Number(arr[0] * 3) - 1 - i).join("-") + "\n";
    }
    for( let i = 0; i < viso4ina / 4; i++){
        mid +=
            Array(totalLength - viso4ina * 2).join("*") +
            Array(viso4ina + 1).join("-") + "*" +
            Array(viso4ina + 1).join("-") + "\n";
    }
    console.log(top + mid);
}