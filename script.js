let searchFrom=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    shopingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');


}

let shopingCart=document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shopingCart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');


}
let loginFrom=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginFrom.classList.toggle('active');
    searchFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    navbar.classList.remove('active');


}
/*let loginFrom=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginFrom.classList.toggle('active');

}*/
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    searchFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');

}
var swiper = new Swiper(".product-sliders", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay:7500,
    disableoninteraction:false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});