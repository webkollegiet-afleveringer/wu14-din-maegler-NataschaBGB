import { useNavigate } from 'react-router';
import './Hero.sass';

export default function Hero() {

    // useNavigate is a hook from react-router that allows us to navigate to a different page when the user clicks on the search icon or presses enter in the search input field
    const navigate = useNavigate();

    const handleSearch = (event) => {
        // prevent the default form submission behavior, which would cause the page to reload
        event.preventDefault();
        // get the value of the search input field using FormData API, which provides a convenient way to extract data from form elements, and store it in a variable called "searchQuery"
        const searchQuery = new FormData(event.target).get('search');
        // console.log(searchQuery);
        
        // new URLSearchParams object to create a query string for the search query
        const searchParams = new URLSearchParams();
    
        // set the search query as a parameter in the searchParams object
        searchParams.set('search', searchQuery);
        // navigate to the houses page with the search query as a parameter in the URL
        navigate(`/houses?${searchParams.toString()}`);
    }


    return (
        <section className='hero'>
            <div className="container">
                
                <h2>Søg efter din drømmebolig</h2>
                
                <div className="hero__search">
                    
                    <h3>Søg blandt 158 boliger til salg i 74 butikker</h3>
                    <p>Hvad skal din næste bolig indeholde</p>
                    
                    <form className="hero__search-input" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            name="search"
                            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" 
                        />
                        <button type='submit'>Søg</button>
                    </form>

                </div>

            </div>
        </section>
    )

}