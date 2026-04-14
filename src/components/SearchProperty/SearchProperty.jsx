import { useNavigate } from 'react-router';
import './SearchProperty.sass';
import { FiSearch } from "react-icons/fi";


export default function SearchProperty() {

    // useNavigate is a hook from react-router that allows us to navigate to a different page when the user clicks on the search icon or presses enter in the search input field
    const navigate = useNavigate();

    // handleSearch when user clicks on the search icon or presses enter in the search input field
    const handleSearch = (e) => {
        // prevent the default behavior of the form submission
        e.preventDefault();

        // get the value of the search input field
        const searchQuery = document.querySelector('.search__input-field').value;
        // log the search query to the console
        // console.log(searchQuery);

        // new URLSearchParams object to create a query string for the search query
        const searchParams = new URLSearchParams();
        // set the search query as a parameter in the searchParams object
        searchParams.set('search', searchQuery);
        // navigate to the houses page with the search query as a parameter in the URL
        navigate(`/houses?${searchParams.toString()}`);

    };


    return (
        <section className="search">
            
            <h3 className='search__title'>Search Property</h3>
            
            <div className="search__input">
                {/* set the handleSearch function to be called when the search icon is clicked */}
                <FiSearch className="icon" onClick={handleSearch} />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className='search__input-field' 
                    // when pressing a key, the press gets registered in the event object as e.key
                    // - if the key is 'Enter', call the handleSearch function
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)} 
                />
            </div>

        </section>
    )

}