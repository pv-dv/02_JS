// Reverse string
function stringBackwards(stringIn) {
    return stringIn.split("").reverse().join("");
}
var stringReversed = stringBackwards("Akademia108");
console.log(stringReversed);



// Sort string
function stringSort(stringIn) {
    return stringIn.split("").sort().join("");
}
var sortedString = stringSort("Akademia108");
console.log(sortedString);