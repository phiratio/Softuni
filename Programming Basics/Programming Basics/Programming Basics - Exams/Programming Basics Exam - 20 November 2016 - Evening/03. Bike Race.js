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
    let groups = {
        juniors : {
            "trail" : 5.50,
            "cross-country" : 8.0,
            "downhill" : 12.25,
            "road" : 20
        },
        seniors : {
            "trail" : 7.0,
            "cross-country" : 9.50,
            "downhill" : 13.75,
            "road" : 21.50
        }
    };
    if (Number(arr[0]) + Number(arr[1]) >= 50 && arr[2] == "cross-country" ){
        let juniorsd = Number(arr[0]) * ( groups.juniors[arr[2]] * 0.75 );
        let seniorsd = Number(arr[1]) * ( groups.seniors[arr[2]] * 0.75 );
        console.log( ( ( juniorsd + seniorsd ) * 0.95 ).toFixed(2) );
    } else {
        let juniors = Number(arr[0]) * groups.juniors[arr[2]];
        let seniors = Number(arr[1]) * groups.seniors[arr[2]];
        console.log( ( ( juniors + seniors ) * 0.95 ).toFixed(2) );
    }
}
