import { useLoaderData } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HouseDetails from "../components/HouseDetails/HouseDetails";


export default function House() {

    const { home } = useLoaderData();
    console.log(home);
    

    return (
        <section className="house-page">

            <Header />
            
            <main>
                
                <HouseDetails home={home} />

            </main>

            <Footer />

        </section>
    )

}