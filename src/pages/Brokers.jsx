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

                <Subhero height="200px" title="Medarbejdere i Roskilde" titleSize="3.8rem" subtitle={false} />

                <BrokersAgents brokers={brokers} />

            </main>

            <Footer />
            

        </section>
    )

}