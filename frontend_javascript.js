// fromtend_javascript.js
burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
ser=document.querySelector('.ser');
ulclass = document.querySelector('.ulclass');



burger.addEventListener('click', ()=>{
    ulclass.classList.toggle('v-class');
    ser.classList.toggle('v-class');
    navbar.classList.toggle('h-class');

});