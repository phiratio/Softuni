/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var hours = Number(arr[0]);
    var minutes = Number(arr[1]);
    /// min logic
    if (minutes + 15 >= 60) {
        hours++;
        minutes = Math.abs(minutes - 45);
    } else {
        minutes += 15;
    }
    ///hour logic
    if (hours > 23) {
        hours = Math.abs(hours - 24);
    }
    if (minutes < 10) {
        minutes = "0" + String(minutes);
    }
    console.log(hours + ":" + minutes);
}