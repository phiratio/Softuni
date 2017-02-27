/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var xarr = arr[0].split("");
    var map = {
        "a": 1,
        "e": 2,
        "i": 3,
        "o": 4,
        "u": 5
    };
    var sum = 0;
    xarr.forEach(function (x) {
        if(map.hasOwnProperty(x)) {
            sum += map[x];
        }
    });
    console.log(sum);
}