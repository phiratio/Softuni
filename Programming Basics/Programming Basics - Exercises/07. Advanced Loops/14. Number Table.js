/**
 * Created by Void-S on 27-Feb-17.
 */
function solve(arr) {
    let n = Number(arr[0]);
    let globalString = "";

    for(var row = 0; row < n; row++){
        for(var col = 0; col < n; col++){
            var num = row + col + 1;

            if(num > n){
                num = 2 * n - num;
            }
            globalString += String(num) + " ";
        }
        globalString += "\n";
    }

    console.log(globalString);
}