
const toggle_nav_movil = document.querySelectorAll(".toggle_nav_movil");
const nav_movil__main = document.getElementById("nav_movil__main");
const nav_movil__item = document.querySelectorAll(".nav_movil__item");
const home = document.getElementById("home")
const btn__go_top = document.querySelector("#btn__go_top");
const nav_movil__btn_theme = document.querySelector("#nav_movil__btn_theme")

window.addEventListener('scroll',(event) => {  
  showBtnGoTop();   
});

//BTN SIMPLE DARK MODE
nav_movil__btn_theme.addEventListener('click', () => {
  document.querySelector("html").classList.toggle("dark_mode")
  document.querySelectorAll("img").forEach(element => {
    element.classList.toggle("dark_mode_inverse");
  });
} )

// BTN TO GO TOP
btn__go_top.addEventListener('click', () => window.scroll(0,0) )

// TOGGLE NAV MOVIL MENU
toggle_nav_movil.forEach(element => {
    element.addEventListener("click", e => toggleMenuMovil(e) )
});

// CHANGE MENU MOVIL ACTIVE
nav_movil__item.forEach(element => {
  element.addEventListener("click", changeMenuMovilActiveByBtn)
});


function toggleMenuMovil(e) {
  nav_movil__main.classList.toggle("show_menu");    
}

function changeMenuMovilActiveByBtn(){
  
  nav_movil__item.forEach(element => {
    element.classList.remove("active")
  });
  
  this.classList.add("active");
  
}

function changeMenuMovilActiveByUrl(){
  //en desarrollo
}

function showBtnGoTop(){
  if(window.pageYOffset > ( window.innerHeight/2 ) ){
    btn__go_top.style.display = "block";
  }else{
    btn__go_top.style.display = "none";
  }

}

