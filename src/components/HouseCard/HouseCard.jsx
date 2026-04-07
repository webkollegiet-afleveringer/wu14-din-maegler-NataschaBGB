import { Link } from 'react-router';
import './HouseCard.sass';
import { IoMdHeart } from "react-icons/io";
import { useBookmarks } from '../../hooks/useBookmarks';


export default function HouseCard({ home, showFavorite }) {

    // get addBookmark and isBookmarked from useBookmarks hook
    const { addBookmark, isBookmarked } = useBookmarks();


    return (
        <section className='home'>
            
            <button className={`home__bookmark-button ${isBookmarked(home.id) ? "home__bookmark-button--added" : "home__bookmark-button--not-added"}`} onClick={() => addBookmark(home.id, home.adress1, home.description)} disabled={isBookmarked(home.id)} style={{ display: showFavorite ? 'flex' : 'none' }}>
                <IoMdHeart className='heart' />
            </button>

            {home.images?.[0]?.formats?.thumbnail?.url ? (
                <img src={home.images[0].formats.thumbnail.url} alt={home.title} />
            ) : (
                <div className='home__no-image'>No image available</div>
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
                
                {/* cost = ejerudgifter */}
                {/* gross = brutto */}
                {/* netto = netto */}
                {/* payment = udbetaling */}
                {/* price = full price */}
                
                {home.type && home.cost ? (
                    <p className='home__type'><span>{home.type}</span> • Ejerudgift: {home.cost} kr.</p>
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