/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    if(arr[0] < 100) {
        console.log("Less than 100");
    } else if(arr[0] <= 200) {
        console.log("Between 100 and 200");
    } else if(arr[0] > 200) {
        console.log("Greater than 200");
    }
};