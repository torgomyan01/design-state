const {
  active,
  none,
  all,
  one,
  show
} = {
  active: 'active',
  none: 'd-none',
  show: 'show'
}


// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const status = urlParams.get('status');
//
//
// if(status !== 'success'){
//   document.body.outerHTML = '';
// }


window.addEventListener('DOMContentLoaded', function (){
  const swiper = new Swiper('.home-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1, // 1 սլայդ մոբայլում
        spaceBetween: 30, // Կամ ցանկացած ցանկալի տարածություն
      },
    },
  });
})
