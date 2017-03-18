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
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    // 7,27,9,1
    workingArr.forEach( (el, index) => {
        if((index + 1) % 3 === 0 && untreatedPatients > treatedPatients){doctors++}
        doctors >= el ?
            treatedPatients += el :
            treatedPatients += doctors;
        if (doctors < el) {
            untreatedPatients += el - doctors;
        }
    });
    console.log(`Treated patients: ${treatedPatients}.
Untreated patients: ${untreatedPatients}.`)
};