/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var x1 = Number(arr[0]);
    var y1 = Number(arr[1]);
    var x2 = Number(arr[2]);
    var y2 = Number(arr[3]);
    var x = Number(arr[4]);
    var y = Number(arr[5]);

    var length = Math.abs(x1 - x2);
    var height = Math.abs(y1 - y2);
    if( x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        console.log("inside");
    } else {
        console.log("outside");
    }
};