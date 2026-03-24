import { Link } from "react-router";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import './Header.sass';


export default function Header() {
    
    return (
        <section className='header'>

            <header className='header__top'>
                <div className="container">
                    <div className='header__contact'>
                        <div className="mail">
                            <IoIosPaperPlane className="icon" />
                            4000@dinmaegler.com
                        </div>
                        <div className="phone">
                            <FaPhoneAlt className="icon" />
                            +45 7070 4000
                        </div>
                    </div>
                    <Link to="/login">Log ind</Link>
                </div>
            </header>
            
            <header className='header__main'>
                <nav className='header__nav'>
                    <a href="/" className="logo">
                        <img src="/dinmaegler_logo.png" alt="dinmaegler_logo" />
                        Din Mægler
                    </a>
                    <ul>
                        <li>
                            <Link to="/houses">
                                Boliger til salg
                            </Link>
                        </li>
                        <li>
                            <Link to="/brokers">Mæglere</Link>
                        </li>
                        {/* favourites only shows if user is logged in */}
                        <li>
                            <Link to="/favourites">Mine Favoritter</Link>
                        </li>
                        <li>
                            <Link to="/contact">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    )

}