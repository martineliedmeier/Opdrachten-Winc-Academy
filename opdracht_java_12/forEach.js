let colors = ["yellow", "blue", "red", "orange"];

colors.forEach (element => {console.log (element)});

/*
1. while loop: 8 regels
    for loop: 5 regels

2.  forEach method: 3 regels

3. voordeel: je weet zeker dat alle elementen in de array worden opgepakt en dat de laatste niet vergeten wordt door een foutje. Ik vind de for loop het fijnst leesbaar. daarin vind ik het single use principe het duidelijkst.

4. ook dit is itereren:
*/

let person = {
    name: "Martine",
    leeftijd: 47,
    woonplaats: "Rotterdam",
    kleur: "blauw",
    actief: true,
}

for (let key in person) {
    console.log (key + ": " + person[key]);
}


