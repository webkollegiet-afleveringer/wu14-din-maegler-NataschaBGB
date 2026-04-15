import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Subhero from "../components/Subhero/Subhero";

export default function Contact() {

    return (
        <section className="contact-page">
        
            <Header />
            
            <main>
            
                <Subhero height="200px" title="Kontakt os" titleSize="3.8rem" subtitle={false} />

                {/* <ContactDetails />                 */}

            </main>
            
            <Footer />

        </section>
    )

}