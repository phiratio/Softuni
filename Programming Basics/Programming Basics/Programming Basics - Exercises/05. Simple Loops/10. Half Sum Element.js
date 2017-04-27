/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    function arraySummer(array) {
        return array.reduce(function (a, b) {
            return a + b;
        }, 0);
    };
    function makeAllArrayElementsNumbers(array) {
        return array.map(function (x) {
            return parseInt(x, 10);
        });
    };

    var xarr = makeAllArrayElementsNumbers(arr);
    var workingArr = xarr.slice(1);

    var allNumsSummed = arraySummer(workingArr);
    var flag = true;
    workingArr.forEach(function (x) {
        if(x === (allNumsSummed - x) ) {
            console.log("yes sum " + x);
            flag = false;
        }
    });
    if(flag) {
        var sum = Math.max.apply(null, workingArr) * 2 - arraySummer(workingArr);
        console.log("no diff " + Math.abs(sum));
    }
}