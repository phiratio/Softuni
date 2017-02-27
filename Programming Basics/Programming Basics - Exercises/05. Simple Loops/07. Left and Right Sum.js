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
    var leftArr = workingArr.slice(0,xarr[0]);
    var rigthArr = workingArr.slice(xarr[0]);
    var difference = Math.abs(arraySummer(leftArr) - arraySummer(rigthArr));
    if (arraySummer(leftArr) === arraySummer(rigthArr)) {
        console.log("Yes, sum = " + arraySummer(leftArr));
    } else console.log("No, diff = " + difference);
}