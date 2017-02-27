/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr){
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
            }
        };
        return helperApi;
    })();
    let arrx = utilities.makeAllArrayElementsNumbers(arr);
    function nodFinder(a,b) {
        if (b === 0) {
            console.log(a);
            return a;
        } else {
            return nodFinder(b, a % b);
        }
    }
    nodFinder(arrx[0],arrx[1]);
}