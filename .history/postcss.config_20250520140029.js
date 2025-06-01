module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-pxtorem": {
            rootValue: 16, // 1rem = 16px
            propList: ["*"], // Преобразовывать всё
            selectorBlackList: [], // Ничего не исключать
            replace: true, // Заменять px на rem
            mediaQuery: true, // Работает в media
            minPixelValue: 0, // Даже 1px → rem
        },
    },
};
