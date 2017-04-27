/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    if (arr[1] === "m") {
        if(arr[0] >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if (arr[1] === "f") {
        if(arr[0] >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
};