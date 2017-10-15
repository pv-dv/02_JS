// Multiplication results
function arrayMultiplyParameters(num1, num2, num3) {
    var multiplyResult = num1 * num2 * num3;
    console.log("Multiplication result: " + multiplyResult);
}
arrayMultiplyParameters(1,2,3);




// Sum of array content
function arraySum(arrayIn) {
    var sum = 0;
    arrayIn.forEach( function(element, index) {
        sum += element;
    });
    console.log("Sum of elements: " + sum);
}
arraySum([1,2,3,4,5]);





// Multiply array content
function arrayMultiply(arrayIn) {
    var multiplyResult = 1;
    var sum = 0;
    arrayIn.forEach( function(element, index) {
        multiplyResult *= element;
        sum += element;
    });
    console.log("Multiplication result: " + multiplyResult);
    console.log("Sum of elements: " + sum);
}
arrayMultiply([1,2,3,4,5]);





//Sum fo squares
function arraySquareSum(arrayIn) {
    var sum = 0;
    arrayIn.forEach( function(element, index) {
        sum += Math.pow(element,2);
    });
    return sum;
}
var sum = arraySquareSum([1,2,3,4,5]);
console.log("Sum of squares : " + sum);





//Fibonacci
function fibonacciString(n) {
    var fibArray = [0,1];
    var fib;
    
    for (var i = 1; i <= n; i++) {
        var prevIndex = i - 1;
        
        fib = fibArray[i] + fibArray[prevIndex];
        fibArray.push(fib);
    }
    console.log("Element " + n + " of Fibonacci String is: " + fibArray[n]);
}
fibonacciString(3);
