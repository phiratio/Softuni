/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var map = {
        m: 1,
        mm: 1000,
        cm: 100,
        mi: 0.000621371192,
        in: 39.3700787,
        km: 0.001,
        ft: 3.2808399,
        yd: 1.0936133
    };
    var x = arr[0] / map[arr[1]]
    var y = map[arr[2]]
    console.log(
        x * y  + " " + arr[2]
    )
};