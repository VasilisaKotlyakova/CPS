let buttonOpen = document.querySelector('.software__button--open'); // ищем кнопку открытия списка
let buttonClose = document.querySelector('.software__button--close'); // ищем кнопку закрытия списка
let listSoftware = document.querySelector('.software__list'); // ищем список брендов

//инициализируем swiper
if(window.innerWidth < 760) {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',

        //отступ между слайдами
        spaceBetween: 16,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        //количество выводимых слайдов при разных размерах экрана
        breakpoints: {
            320: {
                //количество слайдов
                slidesPerView: 1.2,
                // Optional parameters
            },

            480: {
                //количество слайдов
                slidesPerView: 2,
            },

            650: {
                //количество слайдов
                slidesPerView: 3,
            },

        }

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