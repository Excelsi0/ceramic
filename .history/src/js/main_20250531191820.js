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

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const agree = document.getElementById("agree").checked;

    const errors = [];

    if (name === "") {
        errors.push("Имя не может быть пустым.");
    } else if (name.length < 2) {
        errors.push("Имя должно быть не менее 2 символов.");
    }

    if (email === "") {
        errors.push("Email не может быть пустым.");
    } else if (!isEmail(email)) {
        errors.push("Email имеет некорректный формат.");
    }

    if (!agree) {
        errors.push("Необходимо согласиться с условиями.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    alert("Форма успешно отправлена!");
});
