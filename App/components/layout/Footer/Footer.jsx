import React from "react"
import './Footer.module.css'


export default function Footer() {

    return (

        <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="/" className="footer__logo">Ma Cuisine</a>
                    <span className="footer__description">Restaurante</span>
                    <div>
                        <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Serviços</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Delivery</a></li>
                        <li><a href="#" className="footer__link">Precificação</a></li>
                        <li><a href="#" className="footer__link">Fast food</a></li>
                        <li><a href="#" className="footer__link">Reservas</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Informações</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Evento</a></li>
                        <li><a href="#" className="footer__link">Contate-nos</a></li>
                        <li><a href="#" className="footer__link">Política de Privacidade</a></li>
                        <li><a href="#" className="footer__link">Termos de Serviços</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Endereço</h3>
                    <ul>
                        <li>Rj, Rio de Janeiro</li>
                        <li>Zona Sul</li>
                        <li>(21) 99999-9999</li>
                        <li>LaCuisine@email.com</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">&#169; FrontEnders. All right reserved</p>
        </footer>

    )

}