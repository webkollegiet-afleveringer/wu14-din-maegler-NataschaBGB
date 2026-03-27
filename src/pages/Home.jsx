import { useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import HighlightedHomes from "../components/HighlightedHomes/HighlightedHomes";
import Newsletter from "../components/Newsletter/Newsletter";
import Employees from "../components/Employees/Employees";
import OurApp from "../components/OurApp/OurApp";


export default function Home() {

    const { homes, brokers } = useLoaderData();
    console.log(homes);
    console.log(brokers);


    return (
        <section className="home-page">
        
            <Header />
        
            <main>
                
                <Hero />
                
                <Experience />
                
                {/* set homes from HighlightedHomes to homes provided by the loader */}
                <HighlightedHomes homes={homes} />
                
                <Newsletter />

                <Employees brokers={brokers} />

                <OurApp />

            </main>
        </section>

    )

}