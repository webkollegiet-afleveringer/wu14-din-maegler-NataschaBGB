import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Subhero from "../components/Subhero/Subhero";
import location from '../assets/location.png';


export default function Contact() {

    return (
        <section className="contact-page">
        
            <Header />
            
            <main>
            
                <Subhero height="200px" title="Kontakt os" titleSize="3.8rem" subtitle={false} />

                <section className="contact-page__container">
                    
                    <h2 className="contact-page__title">Vi sidder klar til at besvare dine spørgsmål</h2>
                    <p className="contact-page__text">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig.<br/> Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
                    
                    <div className="contact-page__content">
                        
                        <ContactForm />

                        <article className="contact-info">
                            <div className="contact-info__phone">
                                icon
                                <p className="contact-info__title">Ring til os</p>
                                <p className="contact-info__value">+45 7070 4000</p>
                            </div>
                            <div className="contact-info__email">
                                icon
                                <p className="contact-info__title">Send en mail</p>
                                <p className="contact-info__value">4000@dinmaegler.dk</p>
                            </div>
                            <div className="contact-info__address">
                                icon
                                <p className="contact-info__title">Besøg butikken</p>
                                <p className="contact-info__value">Stændertorvet 78,<br/> 4000 Roskilde</p>
                            </div>
                        </article>

                    </div>

                </section>

                <img src={location} alt="location" className="contact-page__image" />

            </main>
            
            <Footer />

        </section>
    )

}