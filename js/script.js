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


const swiperProduct = new Swiper('.product-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.product-slider-pagination',
    clickable: true,
  }
});



const faqItem = document.querySelectorAll('.settings-item');

faqItem.forEach((item) => {

  item.id = Math.floor(Math.random() * 2000) + '_and';

  item.querySelector('.settings-item-title').addEventListener('click', function (){
    // faqItem.forEach((_item) => {
    //   if(this.id !== _item.id)
    //     _item.classList.remove(active);
    // })

    item.classList.toggle(active)
  })
})

const getFilter = document.querySelector('.open-filter');
const filterBlock = document.querySelector('.filter-block');
const filterBlockClose = document.querySelector('.filter-block-close');


getFilter?.addEventListener('click', function (){
  filterBlock.classList.add(active);
  document.body.style.overflow = 'hidden';
})


filterBlockClose?.addEventListener('click', function (){
  filterBlock.classList.remove(active);
  document.body.style.overflow = null;
})



