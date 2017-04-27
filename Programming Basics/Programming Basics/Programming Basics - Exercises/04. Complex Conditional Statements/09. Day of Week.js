/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if (arr[0] >= 1 && arr[0] <= 7) {
        console.log(days[arr[0] - 1]);
    }else {
        console.log("error");
    }
};