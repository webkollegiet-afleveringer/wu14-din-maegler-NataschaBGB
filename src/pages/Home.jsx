import { useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";

export default function Home() {

    const homes = useLoaderData();
    console.log(homes);
    
  
    return (
        <section className="home">
        
            <Header />
        
            <main>
                <Hero />
                <Experience />
            </main>
        </section>
    )

}