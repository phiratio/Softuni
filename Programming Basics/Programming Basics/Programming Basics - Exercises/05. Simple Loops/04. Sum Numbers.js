/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var output = 0;
    for (var i = 1; i < arr.length; i++) {
        output += Number(arr[i]);
    }
    console.log(output);
}