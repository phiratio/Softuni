/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {

    function arraySummer(array) {
        return array.reduce(function (a, b) {
            return a + b;
        }, 0);
    };
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    };
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    };
    function makeAllArrayElementsNumbers(array) {
        return array.map(function (x) {
            return parseFloat(x);
        });
    };

    var xarr = makeAllArrayElementsNumbers(arr);
    var workingArr = xarr.slice(1);

    var leftArr = [];
    var rigthArr = [];
    for (var i = 0; i < workingArr.length; i ++) {
        if (i % 2 === 0) {
            leftArr.push(workingArr[i]);
        } else {
            rigthArr.push(workingArr[i]);
        }
    }

    function oddEvenMinMax(arrayWithOddsOrEvens, methodtoBeapplied, isEven) {
        var z;
        var sortedArray = arrayWithOddsOrEvens.sort(function(a, b){return a-b});
        if (arrayWithOddsOrEvens.length == 0) {
            z = "No";
        } else if(sortedArray.length >= 2 && sortedArray[0] == sortedArray[1] && sortedArray[sortedArray.length] == sortedArray[sortedArray.length - 1]){
            z = "No"
        } else{
            z = methodtoBeapplied(arrayWithOddsOrEvens);
        }
        return z;
    }

    console.log("OddSum=" + arraySummer(leftArr) + ",\nOddMin=" + oddEvenMinMax(leftArr, getMinOfArray,false) + ",\nOddMax=" + oddEvenMinMax(leftArr,getMaxOfArray,false) + ",\nEvenSum=" + arraySummer(rigthArr) + ",\nEvenMin=" + oddEvenMinMax(rigthArr, getMinOfArray, true) + ",\nEvenMax=" + oddEvenMinMax(rigthArr, getMaxOfArray, true));
}