// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters (параметры слайдера)
//     /*direction: 'vertical',*/
//     loop: true, /* loop означает нужно ли переключаться на первый слайд после того как дошли до последнего
//     и true означает что нужно (др словами это бесконечная прокрутка)*/
  
//     // // If we need pagination (если нужна навигация)
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // // Navigation arrows
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
  
//     // // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
  const menuBtn = document.querySelector(".menu-button");
  const menu = document.querySelector(".navbar-panel");
  const menuCloseBtn = document.querySelector(".close-menu");
  menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle('is-open');
  });
  menuCloseBtn.addEventListener("click", ()=>{
    menu.classList.toggle('is-open');
  });