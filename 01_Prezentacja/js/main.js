/* Block coment* - ctrl+shift+/ */
// Line comment - Ctrl+/

console.log('12345');
console.log('Ala ma kota');
console.log('Kot ma "ale"');


// Variables
var liczba = 10;
//case sensitive!
var Liczba = 20;
var string = "This is string";

console.log(liczba);
console.log(string);



// Functions
function logToConsole() {
    console.log("logToConsole: \nI am a function call");
}
//logToConsole();




//FUnction in a variable
var logToConsoleVar = function() {
    console.log("logToConsoleVar: \nI am a function created based on a variable");
}
logToConsoleVar();




//Functions with parameters
function logToConsoleParam(name) {
    console.log("logToConsoleParam - \nFunction call: " + name);
}
logToConsoleParam(string);


function sumation(num1, num2) {
    var wynik = num1 + num2;
    console.log(wynik);
}
sumation(liczba, Liczba);
sumation(15, 45);





//Returning functions
function sumation(num1, num2) {
    var wynik = num1 + num2;
    return wynik;
}
var wynik = sumation(liczba, Liczba);
logToConsoleParam(wynik);





//Data types
//Undefined - not initialized
var undefinedType;
console.log(typeof undefinedType);

//null = declared, but empty
var nullType = null;
console.log(typeof nullType);

var number = 5;
console.log(typeof number);

var stringType = "String";
console.log(typeof stringType);

//null
var element = document.getElementById('div')
    if (element !== null){
//        logic here
        console.log("Object found!");
        element.style.width = 600 + 'px';
    } else {
        console.log("Object not found!");
    }





//Arrays
//as always - indexing starts from 0
var names = ['Marcin', 'Aga', 'Jurek', 10, 20];
console.log(names[4]);

//adding values to an array
names[5] = "Wacek";
//skipped index
names[6] = "Gacek";
//skipped index is undefined
console.log(names[6]);
names[7] = ( names[3] + names[4] ) / ( 2 * names[3] );


//add value at the last array index
names.push("Milosz");

//adds values at the beginning fo an array
names.unshift("Pawel");


//splice method
//names.splice(start position, number of elements to delete, [element to add], [element to add], [element to add])

//remove value from the last array index and returns new array length
console.log(names.pop()); //will return the array length after the last value will be removed
names.pop();

//removes fist array element & returns them
//names.shift()
console.log(names.shift());


//shows the length of the array
console.log(names.length);
console.log(names);


//join of elements in the array
//join method returns string instead of an Array
var surnames = ["Kowalski", "Nowak", "Zasada"];
console.log( "Joined array elemements: " +surnames.join(" / ") );


//Array sorting
surnames.sort();
console.log("Sorted surnames: " + surnames);

//Sort of table with numbers will produce incorrect values
var numArray = [1, 0, 5, 25, 40, 55];
numArray.sort();
console.log(numArray); //[0, 1, 25, 40, 5, 55]
//To deal with that use sort paraeter:
numArray.sort(function(a, b){return a-b});
console.log(numArray); //[0, 1, 5, 25, 40, 55]
//Function(a,b) substracts a - b. if result is negative -> a is lesser than b. positive -> opposite. If 0 -> numbers are equal.

surnames.reverse();
console.log("Reverse sorted surnames: " + surnames);

console.log("--------------------------------------------------");









//--------------------------------------------------------------//
//                          JS OBJECTS                          //
//--------------------------------------------------------------//

// Arrays declard with []
// objects with {}
console.log("----------------------------------------------------")
console.log("                   OBJECTS")
console.log("----------------------------------------------------")

var person = {
    name: "Pawel",
    height: 178,
    
    introduce: function(){
        console.log("Hi, my name is " + this.name);
    }
}
person.introduce();
console.log(person.name + " is " + person.height + " cm height");

//Adding new values to the object
person.age = 32;
person.showDetails = function() { 
    console.log("Name: " + this.name + ", height: " + this.height + ", age: " + this.age)
}

person.showDetails();
console.log(person);




// Math object - build in JS object
console.log("Math.E - Euler: " + Math.E);
console.log("Math.random: " + Math.floor(Math.random() * 100));

//Random letter
var diff = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1);
console.log(typeof diff);
console.log(diff);





// CLASSES
console.log("----------------------------------------------------")
console.log("                   CLASSES")
console.log("----------------------------------------------------")

class Employee {
    constructor(name, surname, height) {
        this.name = name;
        this.surname = surname;
        this.height = height;
    }
    
    intruduce(){
        console.log("Hi, my name is " + this.name + " " + this.surname + ", height: " + this.height);
    }  
}

var pawel = new Employee("Pawel", "Zasada", 178);
pawel.intruduce();

var jurek = new Employee("Jurek", "Ogorek");
jurek.intruduce();

//Values overwrites - no encapsulation!
pawel.name = "Wiesiek";
pawel.intruduce();





// OPERATORS
console.log("----------------------------------------------------")
console.log("                   OPERATORS")
console.log("----------------------------------------------------")


var newInt = 6%4;
console.log("6 Modulo 4 = " + newInt);

//x += y -> x = x + y

//Ternary operator
var number1 = 50;
var numRandom = Math.random() * 100;

number1 -= numRandom;
//if value number1 < 0, result = -1, else result = 1
var result = (number1 < 0)? -1:1;

console.log("0 - (" + number1 + " - " + numRandom + ") = " + result);





//Comparison operators
//Compare values ==
if("2" == 2) {
    console.log("True"); //Always true. JS does not have typing, hence only values are compared
} else {
    console.log("False");
}

//Compare values and types ===
if("2" === 2) {
    console.log("True");
} else {
    console.log("False");//Always fals, as "2" is string, 2 is number and the types do not match, although the value does
}



// Logica operators - &&, ||, ! 
if(("2" == 2) && ("1" == 3)) {
    console.log("&& True");
} else {
    console.log("&& False");//Always fals, as "2" is string, 2 is number and the types do not match, although the value does
}



if( ! (("2" !== 2) && (8 > 4)) ) {
    console.log("&& True");
} 
// If "2" has different value and different type than 2 - false 
// && 
// if 8 > 4 - true
// && requires both conditions to be true to be true
// results for the above is false.
// ! before the brackets negates the brackets content result hence whole expression = true (!false)






// CONDITIONAL INSTRUCTIONS
console.log("----------------------------------------------------")
console.log("             CONDITIONAL INSTRUCTIONS")
console.log("----------------------------------------------------")


/*
IF
IF-ELSE
ELSE-IF
*/

if (2 > 5){
    console.log("2 > 5");
} else if (3 > 5){
    console.log("3 > 5");
} else if (4 > 5){
    console.log("4 > 5");
} else if (5 == 5){
    console.log("5 = 5");
} else {
    console.log("nie ma takiej liczby")
}





//SWITCH
var kolor = "red";

switch(kolor){
    case "red":
        console.log("Color red");
        break;
    case "green":
        console.log("Color green");
        break;
    case "yellow":
        console.log("Color yellow");
        break;
    default:
        console.log("Inny kolor")
}







// LOOPS
console.log("----------------------------------------------------")
console.log("                       LOOPS")
console.log("----------------------------------------------------")


for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}





//ForEach
names.forEach( function(element, index) {
              console.log("Element z indexem " + index + " ma warosc " + element);
              });





//WHILE
var z = 15;
while(z > 1){
    console.log(z);
    z--;
}




for (var i = 0; i < 10; i++){
    if (i == 5){
        continue;
    } else {
        console.log(i);
    }
    console.log("++");   
}





// JSON
console.log("----------------------------------------------------")
console.log("                       JSON")
console.log("----------------------------------------------------")


var jsonPeople = {
    "people": [
        {name: 'Pawel', surname: 'Zasada', age: 32, eyes: "blue", hobbies: [
            { hobbyName: "programming" },
            { hobbyName: "cooking" },
            { hobbyName: "traveling" },
         ]},
        {name: 'Jurek', surname: 'Ogorek', age: 12, eyes: "brown", hobbies: [
            { hobbyName: "books" },
            { hobbyName: "movies" },
         ]},
        {name: 'Franek', surname: 'Smuda', age: 51, eyes: "green", hobbies: [
            { hobbyName: "football" },
         ]},
    ]
}
console.log(jsonPeople);
//console.log(jsonPeople.people[0].name);


for(i = 0; i < jsonPeople.people.length; i++) {

    console.log(jsonPeople.people[i].name);
    jsonPeople.people[i].hobbies.forEach(function(element, index){
        console.log(element.hobbyName);
    })
}













