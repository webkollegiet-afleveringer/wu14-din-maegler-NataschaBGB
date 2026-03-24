import './Hero.sass';

export default function Hero() {
    
    // At the top of the homepage, a search functionality is displayed, allowing users to perform free-text searches across all properties.
    // On search, the page with a list view of properties is displayed
    // and information about the search criteria used.

    return (
        <section className='hero'>
            <div className="container">
                <h2>Søg efter din drømmebolig</h2>
                <div className="hero__search">
                    <h3>Søg blandt 158 boliger til salg i 74 butikker</h3>
                    <p>Hvad skal din næste bolig indeholde</p>
                    <div className="hero__search-input">
                        <input type="text" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                        <button>Søg</button>
                    </div>
                </div>
            </div>
        </section>
    )

}