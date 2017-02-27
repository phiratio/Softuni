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

    if (( ((x == x1) || (x == x2)) && ((y >= y1) && (y <= y2)) )
        || ( ((y == y1) || (y == y2)) && ((x >= x1) && (x <= x2)) ) ) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
};