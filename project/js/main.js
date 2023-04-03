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

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

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
    480: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

const events_swiper = new Swiper(".events__swiper", {
  navigation: {
    nextEl: ".events__btn-next",
    prevEl: ".events__btn-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  },
});

const cards = document.querySelectorAll('.events__card');
let currentCardIndex = 0;

const backButton = document.querySelector('.events__btn-prev');
const nextButton = document.querySelector('.events__btn-next');

function updateButtonVisibility() {
  if (currentCardIndex === 0) {
    backButton.classList.add('events__btn--hidden');
  } else {
    backButton.classList.remove('events__btn--hidden');
  }
  if (currentCardIndex === cards.length - 3) {
    nextButton.classList.add('events__btn--hidden');
  } else {
    nextButton.classList.remove('events__btn--hidden');
  }
}

backButton.addEventListener('click', () => {
  currentCardIndex--;
  updateButtonVisibility();
});

nextButton.addEventListener('click', () => {
  currentCardIndex++;
  updateButtonVisibility();
});

updateButtonVisibility();


const partners_swiper = new Swiper(".partners__swiper", {
  loop: true,

  navigation: {
    nextEl: ".partners__btn-right",
    prevEl: ".partners__btn-left",
  },

  autoplay: {
    delay: 300,
    disableOnInteraction: false,
  },
  speed: 4000,

  breakpoints: {
    1250: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 35,
    }
  },
});

const element = document.querySelector(".gallery__choice")

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
})

new Accordion('.accordion-container');
