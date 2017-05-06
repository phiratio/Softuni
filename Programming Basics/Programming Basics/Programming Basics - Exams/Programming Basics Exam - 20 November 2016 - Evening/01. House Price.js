/**
 * Created by Void-S on 17-Mar-17.
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
    let sRoom = workingArr[0] * 1.1;
    let tRoom = sRoom * 1.1;
    let bathRoom = workingArr[0] / 2;
    let totalSize = workingArr[0] + workingArr[1] + sRoom + tRoom + bathRoom;
    let sizeWithCorideor = totalSize * 1.05;
    console.log( ( sizeWithCorideor * workingArr[2] ).toFixed(2) );
}


function solve2(arr) {
    function makeArrayUnique(myArray) {
        return new Set(myArray);
    }
    let textForOutput = "";
    let joker = arr.indexOf('JOKER');
    let workingArr = arr.slice(0,joker);
    let cards = {
        '1' : 10,
        '2' : 2,
        '3' : 3,
        '4' : 4,
        '5' : 5,
        '6' : 6,
        '7' : 7,
        '8' : 8,
        '9' : 9,
        '10' : 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        power:{
            'S' : 4,
            'H' : 3,
            'D' : 2,
            'C' : 1
        }
    };
    let players = {};
    workingArr.forEach(player => {
        let name = player.slice(0, player.indexOf(':'));
        let scores = player.slice(player.indexOf(' ') + 1);
        if(!players[name]){
            players[name] = "";
players[name] += ", " + scores;
} else {
    players[name] += ", " + scores;
}
});
for( let prop in players) {
    let notUniqueCards = players[prop].split(", ").slice(1);
    let uniqueCards = makeArrayUnique(notUniqueCards);
    let scores = 0;
    uniqueCards.forEach(singleCard => {
        let cardPower = singleCard.slice(-1);
        let cardValue = singleCard.slice(0, -1);
        let totalCardPower = cards[cardValue] * cards.power[cardPower];
        scores += totalCardPower;
    });
    if (!prop.contains(":"))
        textForOutput += `${prop}: ${scores}\n`;
}
console.log(textForOutput);
}

solve2([ 'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD',
    'JOKER',
    '',
    '' ]);