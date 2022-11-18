import { Routes, Route } from "react-router-dom";
import React from "react"
import './notFound.module.css'
import Error from './notfound.svg'

function NotFound() {

    function close() {
        setTimeout(function () {
            window.location.href = "https://github.com/Ziiron1?tab=repositories";
        }, 2000);
    }

    return (

        <div className="center">
            <img src={Error} className="center" width="800px" alt="404 Error" />
            <h2>Deseja voltar para o início?</h2>
            <div className="space">
                <a href="/"> <button>Sim</button>  </a>
                <a onClick={close}> <button>Não</button>  </a>
            </div>
        </div>

    )

}

export default NotFound