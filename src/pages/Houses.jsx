import { useLoaderData } from "react-router";
import { useState } from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Subhero from "../components/Subhero/Subhero";
import HousesSort from "../components/HousesSort/HousesSort";
import HousesHomes from "../components/HousesHomes/HousesHomes";


export default function Houses() {

    const homes = useLoaderData();
    // console.log(homes);

    const [selectedType, setSelectedType] = useState('default');
    const [price, setPrice] = useState(0);


    return (
        <section className="houses-page">
            
            <Header />

            <main>
                {/* components here */}

                <Subhero title="Boliger til salg" height="200px" />
                
                <HousesSort 
                    homes={homes} 
                    setSelectedType={setSelectedType} 
                    setPrice={setPrice}
                    price={price}
                />

                <HousesHomes 
                    homes={homes} 
                    selectedType={selectedType} 
                    price={price}
                />

            </main>

            <Footer />

        </section>
    )
    
}