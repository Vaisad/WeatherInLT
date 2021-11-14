// window.axios = require('axios');
// window.bootstrap = require('bootstrap');

const search = document.querySelector('.button-search');
const menu = document.querySelector('.button-menu');
const input = document.querySelector('.input');
const form = document.querySelector('.form-form');
const close = document.querySelector('.close-img');
const closeBtn = document.querySelector('body');


menu.addEventListener('click', () => form.style.display = 'inline');
close.addEventListener('click', () => form.style.display = 'none');



let temp = true;
search.addEventListener('click',function(){
      temp = !temp;
      if(!temp){ 
        input.style.display = "inline"
      }else{
        input.style.display = "none" 
      } 
});


