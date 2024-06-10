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
