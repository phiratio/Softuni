/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    var figType = arr[0];
    var val1 = Number(arr[1]);
    var val2 = Number(arr[2]);

    var map = {
        "square": function (x) {
            return x * x;
        },
        "rectangle": function (x, y) {
            return x * y
        },
        "circle": function (r) {
            return Math.PI * r * r
        },
        "triangle": function (a, h) {
            return (a * h) / 2
        }
    };

    var result = map[figType](val1, val2);

    console.log(result.toFixed(3));

}