import { Link } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Error() {
    return (
        <section className="error-page">

            <Header />

            <main>
                
                <h1>Hov!</h1>
            
                <h2>Du er havnet på en side som ikke findes!</h2>
                
                <p>Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau og bedt dem om, at se på fejlen.</p>

                <Link to="/">Tilbage til forsiden</Link>
                
            </main>

            <Footer />

        </section>
        
    )
}