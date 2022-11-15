import React from "react";

export default function Scroll() {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1500,
        reset: true
    });
    return (

        sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
            interval: 100
        })

    )
}