import FavouritesDetails from "../components/FavouritesDetails/FavouritesDetails";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchFavourites from "../components/SearchFavourites/SearchFavourites";
import Subhero from "../components/Subhero/Subhero";


export default function Favourites() {

    return (
        <section className="favourites-page">

            <Header />
            
            <main>
            
                <Subhero height="200px" title="Mine favoritboliger" titleSize="3.8rem" subtitle={false} />

                <FavouritesDetails />                

            </main>
            
            <Footer />

        </section>
    )

}