import HouseCard from '../HouseCard/HouseCard';
import './HousesHomes.sass';


export default function HousesHomes({ homes, selectedType, price }) {

    // homes.homes is the array of homes from the loader, we need to filter it based on selectedType and price
    let filteredHomes = homes.homes;

    // if selectedType is not 'default', filter homes by type
    if (selectedType !== 'default') {
        // set filteredHomes to a new array that only includes homes with the selected type
        filteredHomes = filteredHomes.filter(home => home.type === selectedType);
    }

    // if price is greater than 0, filter homes by price
    if (price > 0) {
        // set filteredHomes to a new array that only includes homes with a price less than or equal to the selected price
        filteredHomes = filteredHomes.filter(home => home.price <= price);
    }

    return (
        <section className='homes'>
            <div className="container">
                <section className='homes__homes'>
                    {/* map through filteredHomes and create a HouseCard for each home */}
                    {filteredHomes.map(home => (
                        <HouseCard key={home.id} home={home} showFavorite={true} />
                    ))}
                </section>
            </div>
        </section>
    );
}