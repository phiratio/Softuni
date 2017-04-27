/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var x = Math.abs(arr[0] - arr[2]);
    var y = Math.abs(arr[1] - arr[3]);
    var area = x * y;
    var perimeter = 2 * (x+y);
    console.log(
        area + "\n" +
        perimeter
    );


}