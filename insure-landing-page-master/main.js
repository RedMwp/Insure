let menuToggle = document.getElementById('menuToggle');
let menu = document.querySelector('.nav-links');
let open = false;

function openMenu(){
  open = true;
  if(open == true){
    menuToggle.src = 'images/icon-close.svg';
    menu.style.top = '100px';
  }
}

menuToggle.onclick = function(){
  if(open == false){
    openMenu();
    
  }
  else{
    menuToggle.src = 'images/icon-hamburger.svg';

    menu.style.top = '-100vh';
    
    open = false;
  }
};