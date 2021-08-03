function average (number1, number2, number3, number4, number5) {
    var sum = (number1 + number2 + number3 + number4 + number5);
    var tussenAntwoord =  (sum / 5);
    var eindAntwoord = Math.round (tussenAntwoord);
    return eindAntwoord    
}

let antwoord = average (5, 6 , 8, 3, 9)
console.log (antwoord)

// deze function is duidelijk een producing function