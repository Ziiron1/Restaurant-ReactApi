import React from "react";
import "./Navbar.css";
import logo2 from './logo2.png'
import User from './User.png'


export default function Navbar() {

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
                            <li><i className='bx bx-moon change-theme' id="themebtn"></i></li>
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