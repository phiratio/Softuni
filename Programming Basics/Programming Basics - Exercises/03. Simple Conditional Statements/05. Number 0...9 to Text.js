/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var map = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    var num = arr[0];
    if (map.hasOwnProperty(num)){
        console.log(map[num]);
    } else {
        console.log("number too big");
    }
};