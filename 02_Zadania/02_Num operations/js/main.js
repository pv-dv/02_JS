// Multiplication results
function arrayMultiplyParameters(num1, num2, num3) {
    var multiplyResult = num1 * num2 * num3;
    console.log(multiplyResult);
}
arrayMultiplyParameters(1,2,3);




// Sum of array content
function arraySum(arrayIn) {
    var sum = 0;
    arrayIn.forEach( function(element, index) {
        sum += element;
    });
    
    
    console.log(sum);
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
    console.log(multiplyResult);
    console.log(sum);
}
arrayMultiply([1,2,3,4,5]);





//Sum fo squares
function arraySquareSum(arrayIn) {
    var sum = 0;
    arrayIn.forEach( function(element, index) {
        sum += Math.pow(element,2);
    });
    console.log(sum);
}
arraySquareSum([1,2,3,4,5]);





//Fibonacci
function fibonacciString(n) {
    var fibArray = [0,1];
    var fib;
    
    for (var i = 1; i <= n; i++) {
        var prevIndex = i - 1;
        
        fib = fibArray[i] + fibArray[prevIndex];
        fibArray.push(fib);
    }
    console.log(fibArray[n]);
}
fibonacciString(3);
