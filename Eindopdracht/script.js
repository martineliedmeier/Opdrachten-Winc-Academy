const knop = document.querySelector("#hamburgerButton");
const menu = document.querySelector("#menu");
const achtergrond = document.querySelector("#body");
const begin = document.querySelector ("#begin");
const liRood = document.querySelector("#liRood");
const liBlauw = document.querySelector ("#liBlauw");
const liGroen = document.querySelector ("#liGroen");

knop.addEventListener("click", function (){
    menu.classList.toggle ("showMenu");
})

begin.addEventListener("click", function () {
    achtergrond.classList.remove ("blauweAchtergrond");
    achtergrond.classList.remove ("groeneAchtergrond");
    achtergrond.classList.remove ("rodeAchtergrond");
})

liRood.addEventListener("click", function (){
    achtergrond.classList.remove ("blauweAchtergrond");
    achtergrond.classList.remove ("groeneAchtergrond");
    achtergrond.classList.add ("rodeAchtergrond");
});

liBlauw.addEventListener("click", function (){
    achtergrond.classList.remove ("rodeAchtergrond");
    achtergrond.classList.remove ("groeneAchtergrond");
    achtergrond.classList.add ("blauweAchtergrond")
});

liGroen.addEventListener("click", function (){
    achtergrond.classList.remove ("rodeAchtergrond");
    achtergrond.classList.remove ("blauweAchtergrond");
    achtergrond.classList.add ("groeneAchtergrond")
});

