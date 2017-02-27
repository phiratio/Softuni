/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var totalSeconds = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    var seconds = totalSeconds % 60;
    if(seconds <10) {
        seconds = "0" + seconds;
    }
    console.log(Math.floor(totalSeconds/60) + ":" + seconds );
};