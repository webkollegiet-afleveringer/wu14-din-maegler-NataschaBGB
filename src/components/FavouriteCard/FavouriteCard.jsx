import './FavouriteCard.sass';


export default function FavouriteCard({ home, removeBookmark }) {
    
    return (
        <article key={home.id} className='favourites-details__home'>

            <h3>{home.headline}</h3>
            
            <button className='favourites-details__remove-button' onClick={() => removeBookmark(home.id)}>Fjern fra favoritter</button>

        </article>

    )

}