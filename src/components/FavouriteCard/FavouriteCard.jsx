import { Link } from 'react-router';
import './FavouriteCard.sass';


// when adding a home to favourites, it is meant to be added to this:

// Add to this API endpoint: https://dinmaegler.onrender.com/users/6163ff832616683c883b049f - where the last part is the user id
// set headers: 
// Content-Type: application/json, 
// Authorization: Bearer <token>
//  - where the token is the JWT token received when logging in
// set method to PUT 
// set body:
// JSON.stringify(
//     { 
//         homes: [homeId]
//     }
// )
// - where homeId is the id of the home being added to favourites

// But I can not create a user, because I am missing an endpoint for registration, so I will just use the useBookmarks hook to manage the favourites in local storage for now


export default function FavouriteCard({ home, removeBookmark }) {
    
    return (
        <article key={home.id ? home.id : ''} className='favourite-card'>

            <Link to={`/houses/${home.id ? home.id : ''}`} className='favourite-card__link'>

                <img src={home.image ? home.image : '/default-image.jpg'} alt={home.title ? home.title : 'Titel ikke tilgængelig' } />

                <section className='favourite-card__header'>
                    <h2 className='favourite-card__title'>{home.title ? home.title : 'Titel ikke tilgængelig'}</h2>
                    <p className='favourite-card__location'>{home.postalcode ? home.postalcode : 'Postnummer ikke tilgængeligt'} {home.city ? home.city : 'By ikke tilgængelig'}</p>

                    <p className='favourite-card__type'><span>{home.type ? home.type : 'Type ikke tilgængelig'}</span> • Ejerudgift: {home.cost ? home.cost?.toLocaleString('da-DK') : null} kr.</p>
                </section>
            </Link>

            {home.energylabel ? (
                <div className={`favourite-card__energylabel-value ${home.energylabel === 'A' ? 'a-label' : home.energylabel === 'B' ? 'b-label' : home.energylabel === 'C' ? 'c-label' :
                home.energylabel === 'D' ? 'd-label' : 'no-label' }`}>
                    {home.energylabel ? home.energylabel : 'Energimærke ikke tilgængeligt'}
                </div>
            ) : null}
                

            {home.rooms && home.livingspace ? (
                <p className='favourite-card__size'>{home.rooms ? home.rooms : 'Antal værelser ikke tilgængeligt'} værelser • {home.livingspace ? home.livingspace : 'Boligareal ikke tilgængeligt'} m²</p>
            ) : null}

            {home.price ? (
                <p className='favourite-card__price'>Kr. {home.price ? home.price.toLocaleString('da-DK') : null}</p>
            ) : null}
            
            <button className='favourite-card__remove-button' onClick={() => removeBookmark(home.id ? home.id : '')}>Fjern fra favoritter</button>

        </article>

    )

}