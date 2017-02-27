/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    //get the date from input and format it to fit the ISO standart
    var formattedDateFromInput = arr[0].split('-').reverse().join('-');
    var startDate = new Date(formattedDateFromInput);
    var x = 1000;
    var yStarrt = startDate ? startDate.getUTCFullYear() : startDate.getFullYear();
    if (yStarrt < 2000) {x = 999;}
    var endDate = addDays(startDate, x);
    endDate = endDate.toISOString()
        .replace(/T.*/, '').split('-').reverse().join('-');
    console.log(endDate);
//function to add days to a given date.
    function addDays(startDate,numberOfDays)
    {
        var returnDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()+numberOfDays,
            startDate.getHours(),
            startDate.getMinutes(),
            startDate.getSeconds());
        return returnDate;
    }
}