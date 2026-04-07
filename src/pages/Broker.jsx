// broker details page, when clicking on a broker in the list on Brokers.jsx// house details page when clicking on a house in the list on Houses.jsx

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Subhero from "../components/Subhero/Subhero";

export default function Broker() {

    // for loader:
    // export default async function brokerDetailsLoader({ params }) {
    
    // const brokerId = params.brokerId;

    // const response = await fetch(`https://dinmaegler.onrender.com/agents/${brokerId}`);
    // if (!response.ok) {
    //         throw new Error('Failed to fetch broker details');
    //     }
    //     const broker = await response.json();
    //     return broker;
    // }

    // const { brokerId } = useParams();


    return (
        <section className="broker-page">

            <Header />
            
            <main>
            
                <Subhero title="Kontakt en medarbejder" height="200px" />

                
            
            </main>
            
            <Footer />

        </section>
    )

}