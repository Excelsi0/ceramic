import "/src/sass/style.scss";

import "flowbite";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/scss/autoplay";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// init Swiper:
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },

    modules: [Navigation, Pagination, Autoplay],
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
