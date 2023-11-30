// MENU BURGER

var menu = document.getElementById("menu"); 
var burger = document.getElementById("iconBurger");
document.getElementById("burger").addEventListener("click", function () {
    menu.classList.toggle("open");
});