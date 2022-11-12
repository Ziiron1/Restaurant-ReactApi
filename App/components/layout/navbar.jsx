import React from "react"
import { Link } from "react-router-dom"
import styles from './Navbar.module.css'


export default function Navbar() {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/"> Home </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/login"> Login </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cadastro"> Cadastro </Link>
                </li>
            </ul>
        </nav>
    )
}