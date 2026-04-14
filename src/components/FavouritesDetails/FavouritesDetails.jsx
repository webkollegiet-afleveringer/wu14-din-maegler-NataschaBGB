import { useBookmarks } from '../../hooks/useBookmarks';
import FavouriteCard from '../FavouriteCard/FavouriteCard';
import './FavouritesDetails.sass';


export default function FavouritesDetails() {

    const { bookmarked, removeBookmark } = useBookmarks();

    console.log(bookmarked);
    

    return (
        <section className='favourites-details'>

            {bookmarked && bookmarked.length > 0 ? (

                bookmarked.map((home) => (
                    
                    <FavouriteCard key={home.id} home={home} removeBookmark={removeBookmark} />
            
                ))
            ) : (
                <h3>No articles have been saved</h3>
            )}
      
      </section>
    )

}