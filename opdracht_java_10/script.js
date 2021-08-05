const leeftijdControle = age => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = age => {
    const controle = leeftijdControle(age);
    if (controle == true) {
        message = "Hello there";
    } else {
        message = "Hey kiddo";
    }
    return message
}

console.log (greeting (15))