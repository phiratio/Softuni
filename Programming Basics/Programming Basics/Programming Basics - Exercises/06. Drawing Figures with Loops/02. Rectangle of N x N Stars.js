/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var stringContent = Array(Number(arr[0]) + 1).join("*");
    var string = "";
    for(var i = 0; i < arr[0]; i++){
        string += stringContent + "\n";
    }
    console.log(string);
}