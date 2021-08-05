// function declaration:

function oefening (number1, number2) {
    var square1 = number1 * number1;
    var square2 = number2* number2;
    var sumSquares = square1 + square2;
    return sumSquares * sumSquares;
}

console.log (oefening (10, 10));

// function expression:

const oefening2 = function (number1, number2) {
    var square1 = number1 * number1;
    var square2 = number2* number2;
    var sumSquares = square1 + square2;
    return sumSquares * sumSquares;
};

console.log (oefening2 (10, 10))

// arrow function:

const oefening3 = (number1, number2) => {
    var square1 = number1 * number1;
    var square2 = number2* number2;
    var sumSquares = square1 + square2;
    return sumSquares * sumSquares;
};

console.log (oefening3 (10, 10))