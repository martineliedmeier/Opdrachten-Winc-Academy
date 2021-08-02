const verfMuur = function (kantMuur, kleur) {
    console.log ("De " + kantMuur + " muur is " + kleur + " geverfd.")
};

// verfMuur ("groen");
// verfMuur ("blauw");
// verfMuur (); resultaat: De muur is undefined geverfd.

verfMuur ("zuidelijke", "oranje")

verfMuur ("oranje", "zuidelijke") // volgorde in de arguments maakt uit

// als je de parameters omwisselt maakt het niet uit, want de volgorde in de tekst wordt bepaald door de code in de functie.