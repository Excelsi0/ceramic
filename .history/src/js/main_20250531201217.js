import "flowbite";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/scss/autoplay";

// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

import JustValidate from "just-validate";

import "/src/sass/style.scss";

try {
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
} catch (e) {}

// Fancybox.bind("[data-fancybox]", {
//     // Your custom options
// });

try {
    const menu = document.getElementById("sideMenu");
    const toggle = document.getElementById("toggleMenu");
    const exit = document.getElementById("closeMenu");

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("left-0");

        menu.classList.toggle("left-0");
        menu.classList.toggle("-left-full");

        // Блокируем/разблокируем прокрутку
        document.body.classList.toggle("overflow-hidden", !isOpen);
    });

    exit.addEventListener("click", () => {
        menu.classList.remove("left-0");
        menu.classList.add("-left-full");

        // Всегда разблокируем прокрутку при закрытии
        document.body.classList.remove("overflow-hidden");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            menu.classList.remove("left-0");
            menu.classList.add("-left-full");
            document.body.classList.remove("overflow-hidden");
        }
    });
} catch (e) {}

try {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".catalog__item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("tab_active");
            contents[index].style.display = "flex";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

try {
    const validator = new JustValidate("form");

    validator
        .addField("#contact__input_name", [
            {
                rule: "required",
                errorMessage: "Поле не должно быть пустым",
            },
            {
                rule: "minLength",
                value: 2,
            },
        ])
        .addField("#contact__input_email", [
            {
                rule: "required",
                errorMessage: "Поле не должно быть пустым",
            },

            {
                rule: "email",
                errorMessage: "Не верный формат",
            },
        ])
        .addField(
            "#contact__input_checkbox",
            [
                {
                    rule: "required",
                    errorMessage: "Поставьте согласие",
                },
            ],
            {
                errorsContainer: "#error__container",
            }
        );
} catch (e) {}

try {
    const valFooter = new JustValidate("#valFooter");
    valFooter
        .addField("#footer__email", [
            {
                rule: "required",
                errorMessage: "Поле не должно быть пустым",
            },

            {
                rule: "email",
                errorMessage: "Не верный формат",
            },
        ])
        .addField(
            "#footer__checkbox",
            [
                {
                    rule: "required",
                    errorMessage: "Поле не должно быть пустым",
                },

                {
                    rule: "email",
                    errorMessage: "Не верный формат",
                },
            ],
            {
                errorsContainer: "#error__container",
            }
        );
} catch (e) {}
