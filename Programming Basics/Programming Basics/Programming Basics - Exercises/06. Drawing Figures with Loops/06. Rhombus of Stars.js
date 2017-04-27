/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var rhombusMiddle = Array(Number(arr[0]) + 1).join("* ") + "\n";
    var topPattern = "";
    var bottPattern = "";
    for (var i = 1; i < arr[0]; i++){
        topPattern += Array(arr[0] - i).join(" ") + Array(i + 1).join(" *") + Array(arr[0] - i + 1).join(" ") +"\n";
    }

    for (var i = 1; i < arr[0]; i++){
        bottPattern += Array(i + 1).join(" ") + Array(arr[0] - i + 1).join("* ") + Array(arr[0] - i + 1).join(" ") +"\n";
    }
    console.log(topPattern + rhombusMiddle + bottPattern );
}