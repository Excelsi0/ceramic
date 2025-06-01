/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,scss}", "./node_modules/flowbite/**/*.js"],
    theme: {
        spacing: (() => {
            const values = {};
            for (let i = 0; i <= 500; i++) {
                values[i] = `${i}px`;
            }
            return values;
        })(),
        screens: {
            xs: "360px",
            sm: "480px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
            "2xl": "1920px",
        },
        extend: {
            colors: {
                dark: "#232323",
                light: "#fafafa",
                "ui-active": "#d9d9d9",
                ceramic: "#c69978",
                "ui-disabled": "#d2d2d2",
                "ui-error": "#db0c35",
                white: "#fff",
                "my-border": "#e2e1e5",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
