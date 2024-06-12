// Animacion de ir arriba

document.getElementById('irArriba').addEventListener('click', scrollTo);

function scrollTo(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

// Ocultar el go up hasta que el mouse pase por encima
document.addEventListener('DOMContentLoaded', function() {
    const irArriba = document.getElementById('irArriba');
    const arr = document.getElementById('arr');
    if(window.innerWidth > 600){
    irArriba.addEventListener('mouseover', function() {
        arr.style.opacity = '1';
    });
    irArriba.addEventListener('mouseout', function() {
        arr.style.opacity = '0';
});
    
    }else{
        arr.style.opacity = '0'
    }
});


// Ocultar el logo del header hasta hacer scroll
window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 350) {
        logo.style.opacity = "1";
    } else {
        logo.style.opacity = "0";
    }
});


window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(window.innerWidth <= 600){
    if (scrollTop > 280) {
        logo.style.opacity = "0.3";
    } else {
        logo.style.opacity = "0";
    }
}
});