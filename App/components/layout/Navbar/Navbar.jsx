import React from "react";
import "./Navbar.css";
import logo from './logo.png'
import User from './User.png'


export default function Navbar() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <input type="checkbox" id="nav-check" />
                    <label htmlFor="nav-check" className="nav-toggler">
                        <span></span>
                    </label>
                    <nav>
                        <ul>
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="#" >About</a></li>
                            <li><a href="/produtos">Produtos</a></li>


                        </ul>
                        <ul className="center">
                            <a href="/login"><img className="iconuser" src={User} alt="Icon User" /> </a>
                            <a id="users2" href="/login">Login</a>
                            <a id="users" href="/cadastro">Registre-se</a>

                        </ul>
                    </nav>
                </div>
            </div >
        </header >
    )
}