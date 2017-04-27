/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var fruit = ["banana","apple","kiwi","cherry","lemon","grapes"];
    var vegetable = ["tomato","cucumber","pepper","carrot"];
    if(fruit.indexOf(arr[0]) != -1) {
        console.log("fruit");
    } else if (vegetable.indexOf(arr[0]) != -1) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
};