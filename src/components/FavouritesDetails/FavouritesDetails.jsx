import { useBookmarks } from '../../hooks/useBookmarks';
import FavouriteCard from '../FavouriteCard/FavouriteCard';
import SearchFavourites from '../SearchFavourites/SearchFavourites';
import './FavouritesDetails.sass';


export default function FavouritesDetails() {

    const { bookmarked, removeBookmark } = useBookmarks();

    console.log(bookmarked);

    // filter the bookmarked homes based on the search term and return the filtered list of homes to be displayed in the UI
    const handleSearch = (searchTerm) => {
        // if there is no search term, return all bookmarked homes
        if (!searchTerm) {
            return bookmarked;
        }
        // filter the bookmarked homes based on the search term
        return bookmarked.filter(home => {
            // convert search term to lowercase and check if it is included in any of the home properties that are strings
            const search = searchTerm.toLowerCase();
            return Object.values(home).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(search)
            );
        });
    };

    
    return (
        <section className='favourites-details'>

            
            <SearchFavourites onSearch={handleSearch} />

            {/* if there is a search term, show the filtered results */}

            {bookmarked && bookmarked.length > 0 ? (

                bookmarked.map((home) => (
                    
                    <FavouriteCard key={home.id} home={home} removeBookmark={removeBookmark} />
            
                ))
            ) : (
                <h3>Ingen boliger er gemt i favoritter</h3>
            )}
      
      </section>
    )

}