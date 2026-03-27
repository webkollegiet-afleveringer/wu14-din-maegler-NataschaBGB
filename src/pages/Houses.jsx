import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import { useLoaderData } from "react-router";


export default function Houses() {

    const homes = useLoaderData();
    console.log(homes);

    return (
        <section className="houses-page">
            
            <Header />

            <main>
                {/* components here */}

            </main>

            <Footer />

        </section>
    )
    
}