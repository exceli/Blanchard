document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const menuItems = document.querySelectorAll('.main__menu-item');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', () => header.classList.toggle('open'));

  navLinks.forEach(link => link.addEventListener('click', () => header.classList.remove('open')));

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      menuItem.classList.toggle('open');
      menuItems.forEach(openMenuItem => {
        if (openMenuItem !== menuItem) {
          openMenuItem.classList.remove('open');
        }
      });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      header.classList.remove('open');
      menuItems.forEach(menuItem => menuItem.classList.remove('open'));
    }
  });
});

document.addEventListener('DOMContentLoaded', (e) => {
  // открытие
  document.getElementById('open-search-form').addEventListener('click',
    (e) => {
      document.getElementById('search-form').classList.add('search-form-show')
    })

  // закрытие
  document.getElementById('search-form-close').addEventListener('click',
    (e) => {
      document.getElementById('search-form').classList.remove('search-form-show')
    })

  // отмена отправки формы
  document.getElementById('search-form').addEventListener('submit',
    (e) => {
      e.preventDefault()
    })
})

const main_swiper = new Swiper('.swiper-container', {
  loop: true,

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
    delay: 5000,
    disableOnInteraction: false,
  },

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

const Modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

let validation = new JustValidate('#form')

validation.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Введите имя'
  },
])

validation.addField("#phone", [
  {
    rule: 'required',
    errorMessage: 'Введите телефон'
  },
])

var element1 = document.getElementById('phone');
var maskOptions = {
  mask: '+{7} (000)000-00-00'
};
var mask = IMask(element1, maskOptions);

