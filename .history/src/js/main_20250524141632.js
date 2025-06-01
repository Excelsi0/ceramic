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
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,

    a11y: {
        prevSlideMessage: "swiper-button-prev",
        nextSlideMessage: "swiper-button-next",
    },
});
