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

const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

iconMenu.addEventListener('click', function (){
  mobileMenu.classList.toggle(active)
})

mobileMenuClose.addEventListener('click', function (){
  mobileMenu.classList.toggle(active)
})



const readMore = document.querySelectorAll('.read-more');

readMore.forEach((_item) => {
  const getParentId = _item.dataset.target;

  const getElem = document.getElementById(getParentId);

  const height = getElem.clientHeight;

  getElem.style.height = `${height / 2}px`;
  let status = false;

  _item.addEventListener('click', function (){
    getElem.style.height = `${status ? height / 2 : height}px`;
    const downIcon = _item.querySelector('i');

    downIcon.style.transform = `rotate(${status ? '0deg' : '-180deg'})`;

    status = !status;
  })

  console.log(getElem.clientHeight)

})


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





const desktopSearch = document.querySelector('.desktop-search');
const desktopMenu = document.querySelector('.desktop-menu');
const desktopMenuBlock = document.querySelector('.desktop-menu-block');
const closeSearch = document.querySelector('.close-search');

desktopSearch.addEventListener('click', opeCloseSearch)

closeSearch.addEventListener('click', opeCloseSearch)

function opeCloseSearch(){
  desktopMenu.classList.toggle('close');
  desktopMenuBlock.classList.toggle('close');
}