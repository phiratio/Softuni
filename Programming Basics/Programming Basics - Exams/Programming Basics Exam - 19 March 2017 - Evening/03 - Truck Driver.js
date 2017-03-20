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

    let workingArr = utilities.makeAllArrayElementsNumbers(arr).slice(1);
    let seasons = {
        springAutumn : {
            les5 : 0.75,
            from5to10 : 0.95,
            max : 1.45
        },
        summer : {
            les5 : 0.90,
            from5to10 : 1.10,
            max : 1.45
        },
        winter : {
            les5 : 1.05,
            from5to10 : 1.25,
            max : 1.45
        }
    };
    let season = "";
    let kms;
    switch (arr[0]) {
        case "Summer" :
            season = "summer";
            break;
        case "Winter" :
            season = "winter";
            break;
        case "Spring" :
            season = "springAutumn";
            break;
        case "Autumn" :
            season = "springAutumn";
    }
    if (workingArr[0] > 10000 && workingArr[0] <= 20000){
        kms = "max"
    } else if(workingArr[0] > 5000 && workingArr[0] <= 10000){
        kms = "from5to10";
    }else{
        kms = "les5";
    }

    let salaryWithoutTaxes = seasons[season][kms] * workingArr[0] * 4;
    let salaryNet = salaryWithoutTaxes * 0.9;
    console.log(`${salaryNet.toFixed(2)}`);
};