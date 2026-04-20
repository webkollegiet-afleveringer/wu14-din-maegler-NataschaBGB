import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../assets/dinmaegler_logo.png";
import './Footer.sass';
import { Link } from "react-router";


export default function Footer() {

    return (
        <footer className='footer'>

            <section className='footer__main'>
                <div className='container'>
                    
                    <a href="/wu14-din-maegler-NataschaBGB/" className="footer__main-logo">
                        <img src={logo} alt="dinmaegler_logo" />
                        <h1>Din Mægler</h1>
                    </a>
                    
                    <p className="footer__main-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

                    <article className='footer__contact'>
                        
                        <div className="phone">
                            <FaPhoneAlt className="icon" />
                            <p className='title'>Ring til os</p>
                            <p className="value">+45 7070 4000</p>
                        </div>
                        
                        <div className="mail">
                            <IoIosPaperPlane className="icon" />
                            <p className='title'>Send en mail</p>
                            <p className="value">4000@dinmaegler.com</p>
                        </div>
                        
                        <div className="address">
                            <IoLocationSharp className="icon" />
                            <p className='title'>Butik</p>
                            <p className="value">Stændertorvet 78, 4000 Roskilde</p>
                        </div>
                        
                        <p className="contact-description">Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                    
                    </article>
                    
                    <nav className='footer__quick-links'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <Link to="/houses">Boliger til salg</Link>
                            </li>
                            <li>
                                <Link to="/brokers">Mæglere</Link>
                            </li>
                            <li>
                                <Link to="/contact">Kontakt os</Link>
                            </li>
                            <li>
                                <Link to="/login">Log ind / bliv bruger</Link>
                            </li>
                        </ul>
                    </nav>

                    <section className='footer__membership'>
                        <p>Medlem af</p>
                        <h3>DMS</h3>
                        <h4>Dansk Mægler Sammenslutning</h4>
                    </section>

                </div>
            </section>

            <section className='footer__credits'>
                <div className='container'>
                    <p>Layout By Jit Banik 2020</p>
                </div>
            </section>

        </footer>
    )

}