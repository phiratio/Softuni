/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var monFri = {
        "banana": 2.5,
        "apple": 1.2,
        "orange": 0.85,
        "grapefruit": 1.45,
        "kiwi": 2.70,
        "pineapple": 5.50,
        "grapes": 3.85
    };
    var satSun = {
        "banana": 2.7,
        "apple": 1.25,
        "orange": 0.90,
        "grapefruit": 1.60,
        "kiwi": 3.00,
        "pineapple": 5.60,
        "grapes": 4.20
    };
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (
        (days.indexOf(arr[1]) < 5)
        && (days.indexOf(arr[1]) >= 0)
        && (monFri.hasOwnProperty(arr[0]))
    )  {
        var result = monFri[arr[0]] * Number(arr[2]);
        console.log(result);
    } else if ((days.indexOf(arr[1]) === 5 || days.indexOf(arr[1]) === 6) && (monFri.hasOwnProperty(arr[0]))) {
        var result = satSun[arr[0]] * Number(arr[2]);
        console.log(result);
    } else {
        console.log("error");
    }
};