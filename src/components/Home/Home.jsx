import './Home.sass';


export default function Home({ home }) {
    
    return (
        <div key={home.id} className='home'>
            <img src={home.images?.[0]?.formats?.thumbnail?.url} alt={home.title} />
            <h3>{home.adress1}</h3>
            <p>{home.postalcode} {home.city}</p>
            {/* cost = ejerudgifter */}
            {/* gross = brutto */}
            {/* netto = netto */}
            {/* payment = udbetaling */}
            {/* price = full price */}
            <p>{home.type} * Ejerudgift: {home.cost}</p>
            <div className='home-info'>
                <div>{home.energylabel}</div>
                <div className='home-size'>
                    <p>{home.rooms} * {home.livingspace}</p>
                </div>
                <p>Kr. {home.price}</p>
            </div>
            
        </div>
    )

}