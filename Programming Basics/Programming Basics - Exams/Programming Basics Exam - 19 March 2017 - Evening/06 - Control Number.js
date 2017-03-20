/**
 * Created by Void-S on 19-Mar-17.
 */
function solve(arr) {
    let utilities = (function () {
        let helperApi = {
            arraySummer: function (array) {
                return array.reduce(function (a, b) {
                    return a + b;
                }, 0);

            },
            getMaxOfArray: function (numArray) {
                return Math.max.apply(null, numArray);
            },
            getMinOfArray: function (numArray) {
                return Math.min.apply(null, numArray);
            },
            makeAllArrayElementsNumbers: function (array) {
                return array.map(function (x) {
                    return parseFloat(x);
                });
            },
            factoriel: function (num) {
                if (num === 0) {
                    return 1;
                } else {
                    return num * rFact(num - 1);
                }
            }
        };
        return helperApi;
    })();

    let workingArr = utilities.makeAllArrayElementsNumbers(arr);
    let firstNum = workingArr[0];
    let secondNum = workingArr[1];
    let breakStatement = workingArr[2];
    let N = 1;
    let M = 1;
    let sum = 0;
    let moves = 0;
    let combinationsArr = [];

    for(let i = 1; i <= firstNum;i++){
        for(let ii = secondNum; ii >= 1; ii--){
            combinationsArr.push(String(i)+String(ii))
        }
    }

    for(let i = 1; i <= firstNum;i++){
        for(let ii = secondNum; ii >= 1; ii--){

            if(sum >= breakStatement){
                break;
            }
            sum += (i * 2) + (ii * 3);
            moves++;

        }
    }


    // for( let i = 1; i <= 1000000; i ++ ){
    //     sum += (N * 2) + (M * 3);
    //     if(N <= firstNum){
    //     N++}
    //     if(M <= secondNum){
    //     M--}
    //     moves++;
    //     if(sum >= breakStatement){
    //         break;
    //     }
    // }

    if(sum > breakStatement){
        console.log(`${moves } moves
Score: ${sum} >= ${breakStatement}`)
    } else {
        console.log(`${combinationsArr.length} moves`)
    }
};