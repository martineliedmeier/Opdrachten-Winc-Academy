let person = {
    name: "Martine",
    age: 47,
    evaluations: [7, 10, 9]
}
let groet = {
    greeting: "Hi, ik ben een object"
}
let kleur = ["groen", "blauw", "rood"]

// console.log (person)
// console.log (person.name)
// console.log (person['age'])
// console.log (person.evaluations[2])

// console.log (kleur)
// console.log (kleur.length)
// console.log (kleur[0])
// console.log (kleur[kleur.length - 1]) // dit laat het laatste element in de array zien, als je niet weet hoeveel posities de array heeft

kleur.push ("geel")

kleur.push (5)

kleur.push (groet)

console.log (kleur[kleur.length - 1])
