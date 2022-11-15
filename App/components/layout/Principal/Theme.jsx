import React from "react";

export default function Theme() {

    const themeButton = document.getElementById('themebtn')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
    
    function scrollHeader() {
        const nav = document.querySelector('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
}