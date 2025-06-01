/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,scss}", "./node_modules/flowbite/**/*.js"],
    theme: {
        screens: {
            xs: "360px",
            sm: "480px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
            "2xl": "1920px",
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
