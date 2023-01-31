/* Configuracion de Slider con Swiper.js */

window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay:{
        delay: 5000
    },
    loop: true,
    pagination: true,
    navigation: true
});