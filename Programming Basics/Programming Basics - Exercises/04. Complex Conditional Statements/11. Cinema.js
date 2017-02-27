/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var totalSeats = arr[1] * arr[2];
    switch (arr[0]) {
        case "Premiere":
            var result = 12 * totalSeats;
            console.log(result.toFixed(2));
            break;
        case "Normal":
            var result = 7.5 * totalSeats;
            console.log(result.toFixed(2));
            break;
        case  "Discount":
            var result = 5 * totalSeats;
            console.log(result.toFixed(2));
            break
    }
};