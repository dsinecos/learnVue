// How to arrange a set of numbers in an array randomly?

/*
getRandomBetween(1, 5);

var arrayID = [];

do {
    var random = (Math.random()*(end-start)+start).toFixed(0);
    if(arrayId.indexOf())

} while (arrayID.length(end-start+1))

function getRandomBetween(start, end) {

    console.log();

}
*/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colorClass = [];

var colorObject = [
    {
        id: 1,
        color: "salmon"
    },
    {
        id: 2,
        color: "seagreen"
    },
    {
        id: 3,
        color: "sienna"
    },
    {
        id: 4,
        color: "brown"
    },
    {
        id: 5,
        color: "tan"
    },
    {
        id: 6,
        color: "red"
    },
    {
        id: 7,
        color: "yellow"
    },
    {
        id: 8,
        color: "purple"
    },
    {
        id: 9,
        color: "lawngreen"
    },
    {
        id: 10,
        color: "crimson"
    }
]

arr = shuffle(arr);

for (var i = 0; i < arr.length; i++) {
    colorClass[i] = colorObject[arr[i]-1].color;    
}

console.log(arr);
console.log(colorClass);