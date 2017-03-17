/**
 * Created by Void-S on 17-Mar-17.
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
    let slicedTons = workingArr.slice(1);
    let totalTons = slicedTons.reduce( (acc, val) => {
        return acc + val;
    });
    let tonsBus = 0;
    let tonsTruck = 0;
    let tonsTrain = 0;
    slicedTons.forEach( el => {
        if(el <= 3){
            tonsBus += el;
        }else if(el > 3 && el <= 11){
            tonsTruck += el;
        }else{
            tonsTrain += el;
        }
    });

    let MediumTonPrice = ( tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120 ) / totalTons;
    let busPer = tonsBus / totalTons * 100;
    let truckPer = tonsTruck / totalTons * 100;
    let trainPer = tonsTrain / totalTons * 100;
    console.log(`${MediumTonPrice.toFixed(2)}
${busPer.toFixed(2)}%
${truckPer.toFixed(2)}%
${trainPer.toFixed(2)}%`)
};
