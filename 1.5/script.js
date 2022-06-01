let buttonOpen = document.querySelector('.software__button--open'); // ищем кнопку открытия списка
let buttonClose = document.querySelector('.software__button--close'); // ищем кнопку закрытия списка
let listSoftware = document.querySelector('.software__list'); // ищем список брендов

//инициализируем swiper
if(window.innerWidth < 620) {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1.3,
        //отступ между слайдами
        spaceBetween: 16,

        slidesPerColumn: 1.3,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

}

//отслеживаем клик по кнопке "открыть список"
buttonOpen.addEventListener('click', function(){
    //удаляем скрывающий класс у закрывающей кнопки - делаем его видимым
    buttonClose.classList.remove('hidden');

    //добавить класс у открывающей кнопки - делаем его невидимым
    buttonOpen.classList.add('hidden');

    //расширяем окно с брендами
    listSoftware.classList.add('software__list--open');
});

//отслеживаем клик по кнопке "закрыть список"
buttonClose.addEventListener('click', function(){
    //удаляем скрывающий класс у открывающей кнопки - делаем его видимым
    buttonOpen.classList.remove('hidden');

    //добавить класс у закрывающей кнопки - делаем его невидимым
    buttonClose.classList.add('hidden');

    //сужаем окно с брендами
    listSoftware.classList.remove('software__list--open');
});