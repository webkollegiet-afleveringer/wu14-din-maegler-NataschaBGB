import { Link } from 'react-router';
import './HouseCard.sass';


export default function HouseCard({ home }) {
    
    return (
        <Link to={`/houses/${home.id}`} className='home'>
            {home.images?.[0]?.formats?.thumbnail?.url ? (
                <img src={home.images[0].formats.thumbnail.url} alt={home.title} />
            ) : (
                <div className='home__no-image'>No image available</div>
            )}
            
            <div className='home__info'>
                <div className='home__header'>
                    {home.adress1? (
                        <h3>{home.adress1} </h3>
                    ) : null}
                    {home.adress2? (
                        
                        <h3><span>•</span> {home.adress2}</h3>
                    ) : null}
                </div>
                
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
                        <p className='details-price'>Kr. {home.price}</p>
                    ) : null}

                </div>
            </div>
        </Link>
    )

}