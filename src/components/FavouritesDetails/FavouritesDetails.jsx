import { useEffect, useState } from 'react';
import { useBookmarks } from '../../hooks/useBookmarks';
import FavouriteCard from '../FavouriteCard/FavouriteCard';
import SearchFavourites from '../SearchFavourites/SearchFavourites';
import './FavouritesDetails.sass';


export default function FavouritesDetails() {

    const { bookmarked, removeBookmark } = useBookmarks();

    const [filteredHomes, setFilteredHomes] = useState(bookmarked);

    console.log(bookmarked);

    useEffect(() => {
        setFilteredHomes(bookmarked);
    }, [bookmarked]);

    // filter the bookmarked homes based on the search term and return the filtered list of homes to be displayed in the UI
    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredHomes(bookmarked);
            return;
        }

        const search = searchTerm.toLowerCase();

        const filtered = bookmarked.filter(home =>
            Object.values(home).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(search)
            )
        );

        setFilteredHomes(filtered);
    };

    
    return (
        <section className='favourites-details'>

            
            <SearchFavourites onSearch={handleSearch} />

            {/* if there is a search term, show the filtered results */}

            {filteredHomes && filteredHomes.length > 0 ? (

                filteredHomes.map((home) => (
                    
                    <FavouriteCard key={home.id} home={home} removeBookmark={removeBookmark} />
            
                ))
            ) : (
                <h3>Ingen boliger er gemt i favoritter</h3>
            )}
      
      </section>
    )

}