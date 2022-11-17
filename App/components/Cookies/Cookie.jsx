import React from "react";

export default function Cookies() {
    // message = 'Utilizamos cookies para que vocÃª tenha a melhor experiÃªncia em nosso site. Para saber mais acesse nossa pÃ¡gina de PolÃ­tica de Privacidade',
    //     backgroundColor = 'rgba(255,255,255,0.95)',
    //     textColor = '#666666',
    //     buttonBackgoundColor = '#0e9a20',
    //     buttonHoverBackgoundColor = '#0a6b16',
    //     buttonTextColor = '#ffffff'
} {
    let check = localStorage.getItem('avisoCookies')
    if (!check) {
        let body = document.getElementsByTagName('body')[0];
        body.innerHTML += `
            <style>
                #aviso-cookies{z-index:100000;display:flex;width:100%;position:fixed;bottom:0;left:0;background-color:#fff4fff2;padding:20px;box-sizing:border-box;box-shadow:0 0 7px rgb(0 0 0 / 50%);justify-content:center;align-items:center}
                #texto-cookies{font-family:'Poppins', 'Arial',sans-serif;font-size:15px;margin:0 20px 0 0;line-height:1.25rem;color:#666666}
                #texto-cookies * {font-family:'Poppins', 'Arial',sans-serif;font-size:16px;line-height:1.25rem;color:#666666}
                #entendi-cookies{background:#228b58;transition: 0.3s all ease;-o-transition: 0.3s all ease;-ms-transition:0.3s all ease;-moz-transition:0.3s all ease;-webkit-transition:0.3s all ease;color:#ffffff;text-shadow:0 1px 1px rgb(0 0 0 / 20%);border-radius: 2px;border: 1px solid rgba(0,0,0,0.1);border-bottom-color: rgba(0,0,0,0.2);font-size: 14px;padding: 6px 14px;cursor: pointer;line-height:19px}
                #entendi-cookies:hover{background-color: #076b3a;}
            </style>
            <div id="aviso-cookies">
                <span id="texto-cookies">Utilizamos cookies para que você tenha a melhor experiência em nosso site. Para saber mais acesse nossa página de Política de Privacidade</span>
                <button id="entendi-cookies">Entendi</button>
            </div>`;
        document.getElementById('entendi-cookies').addEventListener('click', function () {
            localStorage.setItem("avisoCookies", "accept");
            document.getElementById('aviso-cookies').remove()
        })
    }
}
