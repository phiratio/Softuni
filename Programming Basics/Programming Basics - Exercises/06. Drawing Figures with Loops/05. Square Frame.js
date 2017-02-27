/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    // var stringContent = Array(Number(arr[0]) + 1).join("*");
    var midPattern = "";
    for (var i = 0; i < arr[0] - 2; i++){
        midPattern += "- ";
    }
    var topRow = "+ " + midPattern + "+";
    var fill = "| " + midPattern + "|\n";
    var output = topRow + "\n" + new Array(Number(arr[0]) - 1).join(fill) + topRow;

    console.log(output);
}