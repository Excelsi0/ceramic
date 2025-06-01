import "/src/sass/style.scss";

tailwind.config = {
    theme: {
        extend: {
            screens: {
                sm: "360px",
                md: "768px",
                lg: "1200px",
                xl: "1920px",
            },
        },
    },
};

// // 👇 Импорт стилей
// import "uikit/dist/css/uikit.min.css";

// // 👇 Импорт основной библиотеки
// import UIkit from "uikit";

// // 👇 Импорт иконок
// import Icons from "uikit/dist/js/uikit-icons";

// // 👇 Подключение иконок в UIkit
// UIkit.use(Icons);

// import "flowbite";
// import "flowbite/dist/flowbite.min.css";
