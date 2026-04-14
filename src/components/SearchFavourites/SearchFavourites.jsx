import './SearchFavourites.sass';
import { FiSearch } from "react-icons/fi";


export default function SearchFavourites({ onSearch }) {

    return (
        <section className='search-favourites'>
            
            <div className="search-favourites__input">
                <FiSearch className="icon"  />
                <input 
                    type="text" 
                    placeholder="Søg i favoritter" 
                    className='search-favourites__input-field' 
                    onChange={onSearch}
                />
            </div>
        </section>
    )

}