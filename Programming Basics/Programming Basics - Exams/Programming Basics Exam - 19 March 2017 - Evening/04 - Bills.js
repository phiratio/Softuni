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
    let meseci = workingArr.slice(1);
    let totalFc = 35 * workingArr[0];

    let totalElectricity = 0;
    let totalWater = workingArr[0] * 20;
    let totalNet = workingArr[0] * 15;
    meseci.forEach( (el, index) => {
        totalElectricity += el;
    });
    let totalOthers = ( totalElectricity + totalFc ) * 1.2;
    let allSummed = ( totalElectricity + totalWater + totalNet + totalOthers ) / workingArr[0];
    console.log(`Electricity: ${totalElectricity.toFixed(2)} ;v
Water: ${totalWater.toFixed(2)} lv
Internet: ${totalNet.toFixed(2)} lv
Other ${totalOthers.toFixed(2)} lv
Average: ${allSummed.toFixed(2)} lv`)
};