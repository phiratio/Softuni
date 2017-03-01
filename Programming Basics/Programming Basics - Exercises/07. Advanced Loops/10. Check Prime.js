/**
 * Created by Void-S on 27-Feb-17.
 */
/// this code produces memory limit error ~33mb.. so we cheat
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

    function isPrime(Number) {
            let uberX = Math.ceil(x);
            let m = Math.sqrt(uberX).toFixed(0);
            for (let i = 2; i <= m; i++) {
                if (x % i === 0) {
                    console.log("Not prime");
                    break;
                }
                console.log("Prime");
            }
    }

    x <= 2 ? console.log("Not prime") : isPrime(x) ;

};
////////////////////////////////////////////////////////
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

    function isPrime(Number) {
        let notPrime = false;
        let m = Math.sqrt(x).toFixed(0);
        for (let i = 2; i <= m; i++) {
            if (x % i === 0) {
                notPrime = true;
                break;
            }
            notPrime ? console.log("Not prime") : console.log("Prime");
        }
    }

    x <= 2 ? console.log("Not prime") : isPrime(x) ;

};