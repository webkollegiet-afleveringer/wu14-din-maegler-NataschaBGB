import './FavouriteCard.sass';


export default function FavouriteCard({ home, removeBookmark }) {
    
    return (
        <article id={home.id} className='favourite-card'>

            <img src={home.image} alt={home.title} />

            <section className='favourite-card__header'>
                <h2 className='favourite-card__title'>{home.title}</h2>
                <p className='favourite-card__location'>{home.postalcode} {home.city}</p>

                <p className='favourite-card__type'><span>{home.type}</span> • Ejerudgift: {home.cost.toLocaleString('da-DK')} kr.</p>
            </section>
            

            {home.energylabel ? (
                <div className={`favourite-card__energylabel-value ${home.energylabel === 'A' ? 'a-label' : home.energylabel === 'B' ? 'b-label' : home.energylabel === 'C' ? 'c-label' :
                home.energylabel === 'D' ? 'd-label' : 'no-label' }`}>
                    {home.energylabel}
                </div>
            ) : null}
                

            {home.rooms && home.livingspace ? (
                <p className='favourite-card__size'>{home.rooms} værelser • {home.livingspace} m²</p>
            ) : null}

            {home.price ? (
                <p className='favourite-card__price'>Kr. {home.price.toLocaleString('da-DK')}</p>
            ) : null}
            
            <button className='favourite-card__remove-button' onClick={() => removeBookmark(home.id)}>Fjern fra favoritter</button>

        </article>

    )

}