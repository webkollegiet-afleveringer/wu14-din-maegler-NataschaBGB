import { PiGooglePlayLogoFill } from "react-icons/pi";
import { GrApple } from "react-icons/gr";
import OurAppLeft from '../../assets/ourappleft.png';
import OurAppRight from '../../assets/ourappright.png';
import './OurApp.sass';


export default function OurApp() {

    return (
        
        <section className='our-app'>
            
            <article className="container">    
            
                <div className='our-app__content'>
                    <h2 className='our-app__title'>Hold dig opdateret på salgsprocessen</h2>
                    <p className='our-app__subtitle'>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                    
                    <div className='our-app__buttons'>
                        <a href="https://play.google.com/store/apps/details?id=com.dinmaegler.app" target="_blank" rel="noopener noreferrer" className='our-app__google-button'>
                            <PiGooglePlayLogoFill className="icon" />
                            Google Play
                        </a>
                        <a href="https://apps.apple.com/dk/app/din-m%C3%A6gler/id123456789" target="_blank" rel="noopener noreferrer" className='our-app__apple-button'>
                            <GrApple className="icon" />
                            Apple Store
                        </a>
                    </div>
                </div>

                <div className='our-app__images'>
                    <img src={OurAppLeft} alt="Our App" className='our-app__image-left' />
                    <img src={OurAppRight} alt="Our App" className='our-app__image-right' />
                </div>
                
            
            </article>

        </section>
    )

}