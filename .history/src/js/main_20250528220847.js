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
    loop: true,
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

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    modules: [Navigation, Pagination, Autoplay],
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const menu = document.getElementById("sideMenu");
const toggle = document.getElementById("toggleMenu");
const exit = document.getElementById("closeMenu");

toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("left-0");

    exit.classList.toggle("left-0");
    menu.classList.toggle("-left-full");

    // Отключаем или включаем скролл на body
    document.body.classList.toggle("overflow-hidden", !isOpen);
});
