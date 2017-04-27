/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var num1 = arr[0];
    var num2 = arr[1];
    var num3 = arr[2];
    if(num1 === num2 && num1 === num3 && num2 === num3){
        console.log("yes");
    }else {
        console.log("no");
    }
}