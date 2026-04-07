import { useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Subhero from "../components/Subhero/Subhero";
import BrokersAgents from "../components/Brokers/Brokers";


export default function Brokers() {

    const brokers = useLoaderData();
    console.log(brokers);

    return (
        <section className="brokers-page">

            <Header />
            <main>

                <Subhero title="Medarbejdere i Roskilde" height="200px" />

                <BrokersAgents brokers={brokers} />

            </main>

            <Footer />
            

        </section>
    )

}