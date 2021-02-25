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


function pos(){

}


var slider = document.querySelector('.slider');
var slider2 = document.querySelector(".slider2");

var numero = document.querySelector('.numero');
var numero2 = document.querySelector(".numero2");

numero.innerHTML = slider.value + "%";
numero2.innerHTML = slider2.value + "px";

slider.oninput = function(){
    numero.innerHTML = this.value + '%';
    document.body.style.opacity = (this.value)/100;
}

slider2.oninput = function(){
    numero2.innerHTML = slider2.value + "px";
    document.querySelector(".texto").style.fontSize = (slider2.value) + "px";
    document.querySelector(".h1").style.fontSize = 2*slider2.value + "px";
}
