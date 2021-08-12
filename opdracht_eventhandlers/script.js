var button = document.querySelector("#mybutton");

button.addEventListener("click", () => {
    alert ("Button clicked");
});

var buttonKleur = document.querySelector("#button2");


buttonKleur.addEventListener("click", () => {
    var achtergrond = document.querySelector("#body");
   achtergrond.classList.toggle("red-background");
});

