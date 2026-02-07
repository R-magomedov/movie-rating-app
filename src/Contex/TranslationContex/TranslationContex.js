import React from "react";

export const TranslateContex = React.createContext();

export const Translates = {
    en: {
        siteName: "Movie Rating",
        menu: {
            home: "Home",
            about: "About",
            movies: "Movies",
            reviews: "Reviews"
        }
    },
    ru: {
        siteName: "КиноРейтинг",
        menu: {
            home: "Главная",
            about: "О нас",
            movies: "Фильмы",
            reviews: "Отзывы"
        }
    }
};