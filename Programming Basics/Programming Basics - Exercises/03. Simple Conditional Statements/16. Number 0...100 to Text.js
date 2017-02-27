/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var map = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred"
    };

    if (Number(arr[0]) > 100 || Number(arr[0]) < 0) {
        console.log("invalid number");
    }
    else if (map.hasOwnProperty(Number(arr[0]))) {
        console.log(map[arr[0]]);
    } else {
        var splited = String(arr[0]);
        var firstPart = Number(splited.charAt(0)) * 10;
        var secondPart = Number(splited.charAt(1));
        console.log(map[firstPart] + " " + map[secondPart]);
    }
}