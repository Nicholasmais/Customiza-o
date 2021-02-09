const menuBtn = document.querySelector('.MenuHambur');
const col = document.querySelector(".coluna");
let menuOpen = false;
let menu2Open = false


menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        col.classList.add('open');
        menuOpen = true;
    }
     else{
        menuBtn.classList.remove('open');
        col.classList.remove('open');
        menuOpen = false;
    }
});



function cor(color){
    document.body.style.backgroundColor = color;
}

function cort(cor){
    document.querySelector('.texto').style.color = cor;
    document.querySelector('.h1').style.color = cor;
}

var slider = document.querySelector('.slider');
var numero = document.querySelector('.numero');
numero.innerHTML = slider.value;

slider.oninput = function(){
    numero.innerHTML = this.value + '%';
    document.body.style.opacity = (this.value)/100;
}

