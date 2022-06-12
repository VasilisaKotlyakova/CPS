let buttonBurger = document.querySelector('.header__button:first-of-type'); // ищем кнопку бургер
let buttonClose = document.querySelector('.aside-header__icon');
let body = document.querySelector('body');
let main = document.querySelector('.wrapper-main');
let header = document.querySelector('.header');
let aside= document.querySelector('.aside');

//отслеживаем клик по кнопке
buttonBurger.addEventListener('click', function() {
  main.classList.add('opacity');
  header.classList.add('opacity');
  aside.classList.remove('modal');

  if(window.innerWidth >= 320 && window.innerWidth < 768) {
    body.style.height = "676px";
    body.style.overflow = "hidden";
  }

  if(window.innerWidth >= 768 && window.innerWidth < 1440) {
    body.style.height = "1024px";
    body.style.overflow = "hidden";
  }
});

buttonClose.addEventListener('click', function() {
  aside.classList.add('modal');
  main.classList.remove('opacity');
  header.classList.remove('opacity');
});
