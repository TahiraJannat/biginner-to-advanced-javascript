// Regular varialbles

var name1, name2, name3;
name1 = 'Tahira';
name2 = 'Marwarid';
name3 = 'Shahanaj';

//Array
// var names = ['Tahira', 'Marwarid', 'Shahanaj'];
var names = new Array();
names[0] = 'Tahira';
names[1] = 'Marwarid';
names[2] = 'Shahanaj';
console.log(names);
names.push('jannat');
names.push('Mitu');
console.log(names);

names.pop();
console.log(names);

var country1 = ['Bangladesh', 'Malta'];
var country2 = ['Pakistan', 'Istanbul'];
var country = country1.concat(country2);
console.log(country);

//Array loop
var num = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum = sum + num[i];
    console.log(num[i]);
}
console.log('Sum =', sum);

// var input = new Array();
// var inputSum = 0;
// for (var i = 0; i < 5; i++) {
//     input[i] = parseInt(prompt('Enter a number'));
//     inputSum = inputSum + input[i];
//     console.log(input[i]);
// }
// console.log('first', inputSum);

//Array Methods
//shift(), unshift(), splice(pos, noe, ele1,ele2,ele3,...)splice
//sort(), reverse(),

var namesA = ['Tahira', 'Salman', 'Shahab Uddin', 'Shahanaj', 'Mitu'];
console.log(namesA);
//shift is opposite of pop( Pop remove last element and shift remove first element)
namesA.shift();
console.log(namesA);
//unshift is opposite of push( Push Add element to end and unshift add element to beginning)
namesA.unshift('New Name');
console.log(namesA);
//splice adding element
namesA.splice(1, 0, 'Sazzad');
console.log(namesA);
//splice removing element
namesA.splice(1, 2);
console.log(namesA);

//slice
var newArray = namesA.slice(1);
console.log('newArray', newArray);

//sort
var sortedNames = namesA.sort();
console.log('sortedNames', sortedNames);

//reverse
var reverseNames = namesA.reverse();
console.log('reverseNames', reverseNames);

var numbers = [40, 50, 60, 10, 20, 30];
numbers.sort(function (a, b) {
    return b - a;
});
console.log('numbweights', numbers);

//// 1D array
// function heighstScore(score) {
//     var max = score[0];

//     for (var i = 0; i < score.length; i++) {
//         if (max < score[i]) {
//             max = score[i];
//         }
//     }
//     return max;
// }
// var scores = [40, 50, 60, 10, 20, 30];
// var maxValue = heighstScore(scores);
// console.log('maxValue', maxValue);

//// 2D array

function heighstRunScorer(scores) {
    var heightScorer = scores[0][0];
    var heightScore = scores[0][1];
    for (var i = 0; i < scores.length; i++) {
        for (var j = 0; j < scores[i].length; j++) {
            if (heightScore < scores[i][j]) {
                // heightScorer = scores[i][j];
                heightScore = scores[i][j];
            }
        }
    }
    console.log('heightScore = ', heightScore);
    // console.log('heightScorer = ', heightScore[i][j]);
}
var playersInfo = [
    ['Ashrafu', 95],
    ['Sakib', 75],
    ['Mushfiq', 30],
    ['Mahamudullah', 45],
    ['Mashrafee', 13],
];
// console.log(playersInfo[4][1]);

heighstRunScorer(playersInfo);
