/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {

    function arraySummer(array) {
        return array.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    function arraySorter(array) {
        return array.sort(function(a, b) {
            return a - b;
        });
    }
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }
    function makeAllArrayElementsNumbers(array) {
        return array.map(function (x) {
            return parseFloat(x);
        });
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
/////////////////////////////////////////////////////////////////////////////////////////
    var xarr = makeAllArrayElementsNumbers(arr);
    var workingArr = xarr.slice(1);

    var combinedValues = [];
    var sortedAndSummedValues = [];
    var maxDiffBetweenTwoNeighbours = 0;

    for (var i = 0; i < workingArr.length; i += 2) {
        if (workingArr.length - i >= 2){
            combinedValues.push(workingArr.slice(i,i + 2));
        } else {
            combinedValues.push(workingArr.slice(i));
        }
    }

    combinedValues.forEach(function (element) {
        sortedAndSummedValues.push(arraySummer(element));
    });
    for(var x = 0; x < sortedAndSummedValues.length;x++){
        if( Math.abs(sortedAndSummedValues[x] - sortedAndSummedValues[x+1]) > maxDiffBetweenTwoNeighbours ){
            maxDiffBetweenTwoNeighbours = Math.abs(sortedAndSummedValues[x] - sortedAndSummedValues[x+1]);
        };
    }
    arraySorter(sortedAndSummedValues);
    if ( sortedAndSummedValues.every(function (val, i, arrx) {
            return val == arrx[0];
        }) ) {
        console.log("Yes, value=" + sortedAndSummedValues[0]);
    } else {
        console.log("No, maxdiff=" + maxDiffBetweenTwoNeighbours );
    }
}