import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import './Header.sass';

export default function Header() {
    
    return (
        <header className='header'>
            <div className="container">
                <section className='header__top'>
                    <div className='header__contact'>
                        <IoIosPaperPlane /> mail
                        <FaPhoneAlt /> phone
                    </div>
                    log ind knap
                </section>
                <nav className='header__nav'>
                    <a href="/">
                        <img src="/dinmeagler.png" alt="din-meagler_logo" />
                        Din Mægler
                    </a>
                    <ul>
                        <li><a href="/houses">Boliger til salg</a></li>
                        <li><a href="/brokers">Mæglere</a></li>
                        {/* favourites only shows if user is logged in */}
                        <li><a href="/favourites">Mine Favoritter</a></li>
                        <li><a href="/contact">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>   
    )

}