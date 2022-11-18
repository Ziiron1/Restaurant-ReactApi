import React from "react";
import "./Navbar.css";
import logo2 from './logo2.png'
import User from './User.png'


export default function Navbar() {

    function theme() {
        // body.classList.toggle('dark-theme')
        const themeButton = document.getElementById('themebtn')
        const darkTheme = 'dark-theme'
        const iconTheme = 'bx-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

        if (selectedTheme) {
            // Se a validação está preenchida, pergunta e remove
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
        }


        // Adiciona ou remove o dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // Theme é salvo no storage local
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())

    }

    return (
        <header>
            <div className="container">
                <div className="row">
                    <a href="/">
                        <img src={logo2} alt="Logo" />
                        <div className="Sublogo">
                            <span className="Sublogo">Originalidade</span>
                        </div>
                    </a>
                    <input type="checkbox" id="nav-check" />
                    <label htmlFor="nav-check" className="nav-toggler">
                        <span></span>
                    </label>
                    <nav>
                        <ul>
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/produtos">Produtos</a></li>

                        </ul>
                        <a className="Agenda" href="/agendamento">Agendar</a>


                        <ul className="center">
                            <a href="/login"><img className="iconuser" src={User} alt="Icon User" /> </a>
                            <a id="users2" href="/login">Login</a>
                            <a id="users" href="/cadastro">Registre-se</a>
                            <li><i className='bx bx-moon change-theme' id="themebtn" onClick={theme}></i></li>
                        </ul>
                    </nav>
                    <div className="nav__toggle" id="nav-toggle">
                    </div>
                </div>

            </div >
        </header >
    )
}
// import '../Principal/script'