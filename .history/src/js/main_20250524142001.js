import "/src/sass/style.scss";

import "flowbite";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
    // configure Swiper to use modules
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },

    a11y: {
        prevSlideMessage: ".swiper-button-prev",
        nextSlideMessage: ".swiper-button-next",
    },
    modules: [Navigation, Pagination],
});
