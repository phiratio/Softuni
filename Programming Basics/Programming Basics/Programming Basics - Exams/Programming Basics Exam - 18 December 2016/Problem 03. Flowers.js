/**
 * Created by Void-S on 15-Mar-17.
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
    let xxx = 0;
    let priceList = {
        springSummer : {
            hrizantema : 2,
            roza : 4.1,
            lale : 2.5
        },
        autumnWinter : {
            hrizantema : 3.75,
            roza: 4.5,
            lale : 4.15
        }
    };
    let season;
    let flowersArr = utilities.makeAllArrayElementsNumbers( arr.slice(0,3) );
    debugger;
    arr[3] === "Spring" || arr[3] === "Summer" ? season = "springSummer" : season = "autumnWinter";
    let priceWithoutDiscounts = ( Number(priceList[season]['hrizantema']) * flowersArr[0] ) +
        ( Number(priceList[season]['roza']) * flowersArr[1] ) +
        ( Number(priceList[season]['lale']) * flowersArr[2] );
    arr[4] === "Y" ? priceWithoutDiscounts = priceWithoutDiscounts * 1.15 : xxx++;
    flowersArr[2] > 7 && arr[3] === "Spring" ? priceWithoutDiscounts = priceWithoutDiscounts * 0.95 : xxx++;
    flowersArr[1] >= 10 && arr[3] === "Winter" ? priceWithoutDiscounts = priceWithoutDiscounts * 0.9 : xxx++;
    ( flowersArr[0] + flowersArr[1] + flowersArr[2] ) > 20 ? priceWithoutDiscounts = priceWithoutDiscounts * 0.8 : xxx++;
    console.log((priceWithoutDiscounts + 2).toFixed(2));
};