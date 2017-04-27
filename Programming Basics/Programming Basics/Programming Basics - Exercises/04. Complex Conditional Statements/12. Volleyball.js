/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var weekendsInSofia = (48 - Number(arr[2])) * ( 3/4 );
    var weekendsAtHome = Number(arr[2]);
    var gamesSofiaHoliday = Number(arr[1]) * (2/3);
    var totalGames = weekendsInSofia + weekendsAtHome + gamesSofiaHoliday;
    if(arr[0] === "leap"){
        var leaped = totalGames + ( totalGames * 0.15 );
        console.log(Math.floor(leaped));
    } else {
        console.log(Math.floor(totalGames));
    }
};