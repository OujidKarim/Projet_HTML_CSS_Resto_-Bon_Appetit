// RESERVATION

// async
// function afficheMessage(){
    // document.addEventListener('DOMContentLoaded', function(){
        var submit = document.getElementById("bouton"); 

        submit.addEventListener('click', function() {
            alert(`Votre réservation a bien été prise en compte`);
        });
    // })
// }

// afficheMessage()





// MENU BURGER

var menu = document.getElementById("menu"); 
var burger = document.getElementById("iconBurger");
document.getElementById("burger").addEventListener("click", function () {
    menu.classList.toggle("open");
});