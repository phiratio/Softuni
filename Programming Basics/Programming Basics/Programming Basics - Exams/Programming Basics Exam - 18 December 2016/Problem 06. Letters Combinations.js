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
                function rFact(number) {
                    if (num === 0) {
                        return 1;
                    } else {
                        return num * rFact(num - 1);
                    }
                }
                return rFact(num);
            },
            allPossibleStrCombinations: function (str) {
                let fn = function(active, rest, a) {
                    if (!active && !rest)
                        return;
                    if (!rest) {
                        a.push(active);
                    } else {
                        fn(active + rest[0], rest.slice(1), a);
                        fn(active, rest.slice(1), a);
                    }
                    return a;
                };
                return fn("", str, []);
            },
            allPossibleArrCombinationsWithRepetition: function (array) {
                let holdingArr = [];
                let recursiveABC = function(singleSolution) {
                    if (singleSolution.length > 2) {
                        holdingArr.push(singleSolution);
                        return;
                    }
                    for (let i=0; i < array.length; i++) {
                        recursiveABC(singleSolution.concat([array[i]]));
                    }
                };
                recursiveABC([]);
                return holdingArr.map( arrItem => {
                    return arrItem.reduce( (acc, val) => {
                        return acc + val;
                    })
                });
            },
            allCombinationsV2: function (array, ignore) {
                let length = array.length - 1;
                let counter = 0;
                let finalArray = [];
                for ( let z = 0; z <= length; z ++){
                    for ( let zz = 0; zz <= length; zz ++){
                        for(let zzz = 0; zzz <= length; zzz++){
                            if(array[z] != ignore && array[zz] != ignore && array[zzz] != ignore) {
                                counter++;
                                finalArray.push(`${array[z]}${array[zz]}${array[zzz]}`)
                            }
                        }
                    }
                }
                return `${finalArray.join(" ")} ${counter}`;
            }
        };
        return helperApi;
    })();

    let startCharCode = arr[0].charCodeAt(0);
    let endChardCode = arr[1].charCodeAt(0);
    let lettersArr = [];
    //let testregex = new RegExp("[" + arr[2] + "]");
    for( let i = startCharCode; i <= endChardCode; i++) {
        lettersArr.push(String.fromCharCode(i));
    }
    //
    // function filterByContainingLetter(item) {
    //     return !(testregex.test(item));
    // }
    // let filteredCombinations = utilities.allCombinationsV2(lettersArr,arr[2]).filter(filterByContainingLetter);
    console.log(utilities.allCombinationsV2(lettersArr,arr[2]));
}





