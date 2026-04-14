import { useBookmarks } from '../../hooks/useBookmarks';
import HouseCard from '../HouseCard/HouseCard';
import './HousesHomes.sass';


export default function HousesHomes({ homes, selectedType, price }) {

    const bookmarks = useBookmarks();

    // MARK: Filter Homes
    // homes.homes is the array of homes from the loader, we need to filter it based on selectedType and price
    let filteredHomes = homes.homes;


    // MARK: Type Filter
    // if selectedType is not 'default', filter homes by type
    if (selectedType !== 'default') {
        // set filteredHomes to a new array that only includes homes with the selected type
        filteredHomes = filteredHomes.filter(home => home.type === selectedType);
    }

    // MARK: Price Filter
    // if price is greater than 0, filter homes by price
    if (price > 0) {
        // set filteredHomes to a new array that only includes homes with a price less than or equal to the selected price
        filteredHomes = filteredHomes.filter(home => home.price <= price);
    }

    // MARK: No Results
    // if there are no homes that match the selected type and price, display a message
    if (filteredHomes.length === 0) {
        return (
            <section className='homes'>
                <div className="container">
                    <p className='homes__no-results'>Ingen boliger matcher dine kriterier. Prøv at justere dine filtre.</p>
                </div>
            </section>
        );
    }

    // MARK: Search Filter
    // get search query from url parameters
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('search');

    // if there is a search query
    if (searchQuery) {
        // filter homes by the search query
        const filtered = filteredHomes.filter(home => {
            // convert search query to lowercase and check if it is included in any of the home properties that are strings
            const searchTerm = searchQuery?.toLowerCase() ?? "";
            // return all values of the home object as an array (Object.values(home))
            // .some() checks if at least one of the values in the array matches the search query, and returns true if it does
            return Object.values(home).some(value =>
                // check if the value is a string && if it includes the search term (case insensitive)
                typeof value === 'string' && value.toLowerCase().includes(searchTerm)
            );
        });
        // set filteredHomes to the new array of homes that match the search query
        filteredHomes = filtered;
    }
    
    // MARK: No Search Results
    // if there are no homes that match the search query, display a message
    if (filteredHomes.length === 0) {
        return (
            <section className='homes'>
                <div className="container">
                    <p className='homes__no-results'>Ingen boliger matcher din søgning. Prøv at justere dine filtre eller søgeord.</p>
                </div>
            </section>
        );
    }


    return (
        <section className='homes'>
            <div className="container">
                <section className='homes__homes'>
                    {/* map through filteredHomes and create a HouseCard for each home */}
                    {filteredHomes.map(home => (
                        <HouseCard key={home.id} home={home} showFavorite={true} bookmarks={bookmarks} />
                    ))}
                </section>
            </div>
        </section>
    );

}