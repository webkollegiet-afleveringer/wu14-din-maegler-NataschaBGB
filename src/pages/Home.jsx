import { useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import HighlightedHomes from "../components/HighlightedHomes/HighlightedHomes";


export default function Home() {

    const homes = useLoaderData();
    console.log(homes);
    
  
    return (
        <section className="home-page">
        
            <Header />
        
            <main>
                <Hero />
                <Experience />
                {/* set homes from HighlightedHomes to homes provided by the loader */}
                <HighlightedHomes homes={homes} limit={4} />
            </main>
        </section>
    )

}