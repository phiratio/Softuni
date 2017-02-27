/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var treeMIddle = " | ";
    var leftSide = "";
    var rightSide = "";
    for (var i = 0; i <= arr[0]; i++){
        leftSide += Array(arr[0] - i + 1).join(" ") + Array(i + 1).join("*") + treeMIddle + Array(i + 1).join("*") + Array(arr[0] - i + 1).join(" ") + "\n" ;
    }
    console.log(leftSide);
}