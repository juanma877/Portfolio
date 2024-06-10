document.getElementById('irArriba').addEventListener('click', scrollTo);

function scrollTo(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const irArriba = document.getElementById('irArriba');
    const arr = document.getElementById('arr');
    irArriba.addEventListener('mouseover', function() {
        arr.style.opacity = '1';

    });
    irArriba.addEventListener('mouseout', function() {
        arr.style.opacity = '0';
});
});



window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400) {
        logo.style.opacity = "1";
    } else {
        logo.style.opacity = "0";
    }
});