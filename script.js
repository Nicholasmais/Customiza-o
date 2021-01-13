const menuBtn = document.querySelector('.MenuHambur');
const col = document.querySelector(".coluna");
let menuOpen = false;


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


