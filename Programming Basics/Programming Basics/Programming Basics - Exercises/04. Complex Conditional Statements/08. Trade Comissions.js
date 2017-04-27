/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var commisions = {
        "Sofia" :{
            "q1": 0.05,
            "q2": 0.07,
            "q3": 0.08,
            "q4": 0.12
        },
        "Varna": {
            "q1": 0.045,
            "q2": 0.075,
            "q3": 0.10,
            "q4": 0.13
        },
        "Plovdiv": {
            "q1": 0.055,
            "q2": 0.08,
            "q3": 0.12,
            "q4": 0.145
        }
    };

    var commisionPercent = "";
    if (arr[1] >= 0 && arr[1] <= 500) {
        commisionPercent = "q1"
    }
    else if (arr[1] > 500 && arr[1] <= 1000) {
        commisionPercent = "q2"
    }
    else if (arr[1] > 1000 && arr[1] <= 10000) {
        commisionPercent = "q3"
    }
    else {
        commisionPercent = "q4"
    }


    if(commisions.hasOwnProperty(arr[0]) && Number(arr[1]) >= 0) {
        var commisionValue = Number(arr[1]) * commisions[arr[0]][commisionPercent];
        console.log(commisionValue.toFixed(2));
    } else {
        console.log("error");
    }
};