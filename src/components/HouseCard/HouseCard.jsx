import { Link } from 'react-router';
import './HouseCard.sass';
import { IoMdHeart } from "react-icons/io";


export default function HouseCard({ home, showFavorite, bookmarks }) {

    // get addBookmark and isBookmarked from useBookmarks hook
    const { addBookmark, isBookmarked } = bookmarks;


    return (
        <section className='home'>
            
            <button className={`home__bookmark-button ${isBookmarked(home.id) ? "home__bookmark-button--added" : "home__bookmark-button--not-added"}`} onClick={() => addBookmark(home.id, home.images[0].formats.thumbnail.url, home.adress1, home.postalcode, home.city, home.type, home.cost, home.energylabel, home.rooms, home.livingspace, home.price)} disabled={isBookmarked(home.id)} style={{ display: showFavorite ? 'flex' : 'none' }}> 
                <IoMdHeart className='heart' />
            </button>

            {home.images?.[0]?.formats?.thumbnail?.url ? (
                <img src={home.images[0].formats.thumbnail.url} alt={home.title} />
            ) : (
                <div className='home__no-image'>Intet billede</div>
            )}
            
            <div className='home__info'>
                <Link to={`/houses/${home.id}`} className='home__header'>
                    {home.adress1? (
                        <h3>{home.adress1} </h3>
                    ) : null}
                    {home.adress2? (
                        
                        <h3><span>•</span> {home.adress2}</h3>
                    ) : null}
                </Link>
                
                {home.postalcode && home.city ? (
                    <p className='home__city'>{home.postalcode} {home.city}</p>
                ) : null}
                
                {home.type && home.cost ? (
                    <p className='home__type'><span>{home.type}</span> • Ejerudgift: {home.cost.toLocaleString('da-DK')} kr.</p>
                ) : null}

                <div className='home__details'>
                    {home.energylabel ? (
                        <div className={`details-energylabel ${home.energylabel === 'A' ? 'a-label' : home.energylabel === 'B' ? 'b-label' : home.energylabel === 'C' ? 'c-label' :
                        home.energylabel === 'D' ? 'd-label' : 
                        'no-label' }`}>
                            {home.energylabel}
                        </div>
                    ) : null}

                    {home.rooms && home.livingspace ? (
                        <p className='home__size'>{home.rooms} værelser • {home.livingspace} m²</p>
                    ) : null}

                    {home.price ? (
                        <p className='details-price'>Kr. {home.price.toLocaleString('da-DK')}</p>
                    ) : null}

                </div>
            </div>
        </section>
    )

}