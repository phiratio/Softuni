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
    let workingArr = utilities.makeAllArrayElementsNumbers(arr).slice(1);
    let priceList = {
        mayOctober : {
            studio : 50,
            apartment : 65
        },
        juneSeptember : {
            studio : 75.20,
            apartment : 68.70
        },
        julyAugust : {
            studio : 76,
            apartment : 77
        }
    };
    let month = "";
    let discountStudio = 1;
    let discountApp = 1;
    if (workingArr[0] > 14) {discountApp = 0.9}
    switch (arr[0]) {
        case "May" :
            if(workingArr[0] > 7 && workingArr[0] <= 14){discountStudio = 0.95}else if(workingArr[0] > 14){discountStudio = 0.7}
            month = "mayOctober";
            break;
        case "June" :
            if(workingArr[0] > 14){discountStudio = 0.8}
            month = "juneSeptember";
            break;
        case "July" :
            month = "julyAugust";
            break;
        case "August" :
            month = "julyAugust";
            break;
        case "September" :
            if(workingArr[0] > 14){discountStudio = 0.8}
            month = "juneSeptember";
            break;
        case "October" :
            if(workingArr[0] > 7 && workingArr[0] <= 14){discountStudio = 0.95}else if(workingArr[0] > 14){discountStudio = 0.7}
            month = "mayOctober"
    }

    console.log(`Apartment: ${(priceList[month].apartment * workingArr[0] * discountApp).toFixed(2)} lv.
Studio: ${(priceList[month].studio * workingArr[0] * discountStudio).toFixed(2)} lv.`);
};