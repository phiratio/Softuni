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
    let workingArr = utilities.makeAllArrayElementsNumbers(arr[0].split(""));
    let rowCount = workingArr[0] + workingArr[1];
    let columns = workingArr[0] + workingArr[2];
    let totalVrutki = rowCount * columns;
    let theNumber = Number(arr[0]);
    let finalString = "";
    for( let i = 1; i <= totalVrutki; i ++){
        if(theNumber % 5 === 0){
         theNumber = theNumber - workingArr[0];
         finalString += theNumber;
        }else if(theNumber % 3 === 0){
         theNumber = theNumber - workingArr[1];
            finalString += theNumber;
        }else {
         theNumber = theNumber + workingArr[2];
            finalString += theNumber;
        }
        if(i == columns){
            finalString += "\n";
            columns += (workingArr[0] + workingArr[2]);
        } else{
            finalString += " ";
        }
    }
    console.log(finalString);
};