import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


export default function House() {

    // for loader:
    // export default async function houseDetailsLoader({ params }) {
    
    // const houseId = params.houseId;

    // const response = await fetch(`https://dinmaegler.onrender.com/homes/${houseId}`);
    // if (!response.ok) {
    //         throw new Error('Failed to fetch house details');
    //     }
    //     const house = await response.json();
    //     return house;
    // }

    // const { houseId } = useParams();


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