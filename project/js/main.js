const main_swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,

  // Автоматическое перелистывание
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const gallery_swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".pages__next",
    prevEl: ".pages__preview",
  },

  pagination: {
    el: ".pages__count",
    type: "fraction",
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    768: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

const element = document.querySelector(".gallery__choice")

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
})
