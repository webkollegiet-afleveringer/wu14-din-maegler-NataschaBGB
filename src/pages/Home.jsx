import { useLoaderData } from "react-router";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {

    const homes = useLoaderData();
    console.log(homes);
    
  
    return (
        <main>
            <Header />
            <Hero />
        </main>
    )

}