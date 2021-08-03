// eerste ingeving: return statement voor ieder apart antwoord

/* function toegang (maximum, aantal, leeftijd) {
    if (maximum > aantal && leeftijd >= 18) {
        return "come in";
    } else if (maximum <= aantal) {
        return "it's too busy now";
    } else {
        return "this is a club for adults";
    }
}

let brendaSays = toegang (100, 90, 15)
console.log (brendaSays) */

// dit is in ieder geval hetzelfde type als script.js - volgens mij: do.

// als je de code wilt schrijven met één return statement, dan kan het zo:

function toegang (maximum, aantal, leeftijd) {
    if (maximum > aantal && leeftijd >= 18) {
        var message = "come in";
    } else if (maximum <= aantal) {
        var message = "it's too busy now";
    } else {
        var message = "this is a club for adults";
    }
    return message
}

let brendaSays = toegang (100, 190, 19)
console.log (brendaSays)