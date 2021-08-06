function beginSpel () { 
    let naam = prompt ("Welkom! Wat is je naam?");
    if (naam !=null) {
        document.getElementById("welkom").innerHTML = "Hey " + naam;
    }

    let klein = prompt ("Wat moet het kleinste nummer zijn?");
    let groot = prompt ("Wat moet het grootste nummer zijn?");

    function bepaalNummer (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let raadNummer = (bepaalNummer (klein, groot));

    document.getElementById("zoeker").innerHTML = "Het nummer dat je zocht, was " + raadNummer + ".";

    let nummer = prompt ("Voer een nummer in van de kleinste tot de grootste om te beginnen met raden..")

    const check = (raadNummer, nummer) => {
        if (raadNummer == nummer) { // let op: de prompt geeft tekst, geen integer!
            message = "Gefeliciteerd, je hebt gewonnen!";
        } else {
            message = "Dag " + naam + ". Tot de volgende keer...";
        }
        return message;
    }
    let oplossingTekst = (check (raadNummer, nummer));
    document.getElementById("oplossing").innerHTML = oplossingTekst;
}

/* for (aantal = 1; aantal <= 5; aantal++) {
    document.write ("Dit was poging # " + aantal)
}*/



