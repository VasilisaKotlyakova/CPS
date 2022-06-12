let buttonOpen = document.querySelector('.brand__button--open'); // ищем кнопку открытия списка
let buttonClose = document.querySelector('.brand__button--close'); // ищем кнопку закрытия списка
let listBrand = document.querySelector('.brand__list'); // ищем список брендов


//отслеживаем клик по кнопке "открыть список"
buttonOpen.addEventListener('click', function(){
  //удаляем скрывающий класс у закрывающей кнопки - делаем его видимым
  buttonClose.classList.remove('hidden');

  //добавить класс у открывающей кнопки - делаем его невидимым
  buttonOpen.classList.add('hidden');

  //расширяем окно с брендами
  listBrand.classList.add('brand__list--open');
});

//отслеживаем клик по кнопке "закрыть список"
buttonClose.addEventListener('click', function(){
  //удаляем скрывающий класс у открывающей кнопки - делаем его видимым
  buttonOpen.classList.remove('hidden');

  //добавить класс у закрывающей кнопки - делаем его невидимым
  buttonClose.classList.add('hidden');

  //сужаем окно с брендами
  listBrand.classList.remove('brand__list--open');
});

let buttonOpenTechnique = document.querySelector('.technique__button--open'); // ищем кнопку открытия списка
let buttonCloseTechnique = document.querySelector('.technique__button--close'); // ищем кнопку закрытия списка
let listTechnique = document.querySelector('.technique__list'); // ищем список брендов


//отслеживаем клик по кнопке "открыть список"
buttonOpenTechnique.addEventListener('click', function(){
  //удаляем скрывающий класс у закрывающей кнопки - делаем его видимым
  buttonCloseTechnique.classList.remove('hidden');

  //добавить класс у открывающей кнопки - делаем его невидимым
  buttonOpenTechnique.classList.add('hidden');

  //расширяем окно
  listTechnique.classList.add('technique__list--open');
});

//отслеживаем клик по кнопке "закрыть список"
buttonCloseTechnique.addEventListener('click', function(){
  //удаляем скрывающий класс у открывающей кнопки - делаем его видимым
  buttonOpenTechnique.classList.remove('hidden');

  //добавить класс у закрывающей кнопки - делаем его невидимым
  buttonCloseTechnique.classList.add('hidden');

  //сужаем окно
  listTechnique.classList.remove('technique__list--open');
});
