// broker details page, when clicking on a broker in the list on Brokers.jsx// house details page when clicking on a house in the list on Houses.jsx

import { useLoaderData } from "react-router";
import BrokerDetails from "../components/BrokerDetails/BrokerDetails";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Subhero from "../components/Subhero/Subhero";
import SearchProperty from "../components/SearchProperty/SearchProperty";
import CallUs from "../components/CallUs/CallUs";

export default function Broker() {

    const { broker } = useLoaderData();
    // console.log(broker);
    

    return (
        <section className="broker-page">

            <Header />
            
            <main>
            
                <Subhero height="200px" title="Kontakt en medarbejder" titleSize="3.8rem" subtitle={false} />

                <section className="broker-page__container">

                    <BrokerDetails broker={broker} />

                    <section className="broker-page__actions">
                        <SearchProperty />
                        <CallUs />        
                    </section>

                </section>
            
            </main>
            
            <Footer />

        </section>
    )

}