const age = 19;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 57;

/* Testdata:
const age = 17;
const isFemale = false;
const driverStatus = "blab"
const firstName = "Bram";
 */

if (age >= 18) {
    console.log ("Je mag naar binnen!");
} else {
    console.log ("Sorry, je bent te jong..");
}


if (isFemale) {
    console.log ("Welkom bij de ladiesnight");
} else  {
    console.log ("See you next time!");
}

if (driverStatus === "bob") {
    console.log ("Rij veilig!");
} else {
    console.log ("Ik bel een taxi voor je");
}

if (age >= 18 && age <= 25) {
    console.log ("Je krijgt 50% korting!");
} 

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Mmmmm... gratis bier");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log ("Gratis bietterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log ("Gratis nachos");
} else if (totalAmount >= 100) {
    console.log ("Bubbels");
}