/**
 * Created by Void-S on 25-Apr-17.
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

    let array1 = arr[0].split(" ");
    let workingArr = utilities.makeAllArrayElementsNumbers(array1) ;
    let longestArr = [];
    let currentArr = [];
    let numToBeChecked = workingArr[0];
    workingArr.forEach( (element, index) => {
            if(element === numToBeChecked ) {
                currentArr.push(element);
            }
            else { // we are looking for new sequence
                numToBeChecked = element;
                if(currentArr.length > longestArr.length) longestArr = currentArr; // working?
                currentArr = [element];
            }
    });
    /// if all numbers are the same the longest arr is empty so lets swap em
    longestArr.length === 0 ? console.log(currentArr.join(" ")) : console.log(longestArr.join(" "));
}

solve(['1 1 2 2 3 3 4 4 5 5']);