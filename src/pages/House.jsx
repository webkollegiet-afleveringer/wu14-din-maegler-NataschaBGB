import { useLoaderData } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


export default function House() {

    const { home } = useLoaderData();
    console.log(home);
    

    return (
        <section className="house-page">

            <Header />
            
            <main>
                
                <h1>House Details</h1>

            </main>

            <Footer />

        </section>
    )

}