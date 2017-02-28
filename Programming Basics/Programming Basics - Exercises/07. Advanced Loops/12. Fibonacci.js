/**
 * Created by Void-S on 27-Feb-17.
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
    let x = Number(arr[0]);
    function findFibonachi(num) {
        if(num <= 1) {
            return 1;
        }
        return findFibonachi(num - 1) + findFibonachi(num - 2);
    }
    x < 2 ? console.log(1) : console.log(findFibonachi(x));
}


function solve(arr) {
    let x = Number(arr[0]);
    function findFibonachi(num) {
        let a = 1, b = 0, temp;

        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }
    x < 2 ? console.log(1) : console.log(findFibonachi(x));
}
/// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 …
function solve(arr) {
    let x = Number(arr[0]);
    function findFibonachi(num) {
        let a = 1, b = 1, f = 0;

        for(let i = 2; i <=num; i++){
            f = a + b;
            a = b;
            b = f;
        }
        console.log(f) ;
    }
    x < 2 ? console.log(1) : console.log(findFibonachi(x));
}