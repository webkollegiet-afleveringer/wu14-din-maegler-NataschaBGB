import { useState } from 'react';
import './SearchFavourites.sass';
import { FiSearch } from "react-icons/fi";


export default function SearchFavourites({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className='search-favourites'>
            
            <div className="search-favourites__input">
                <FiSearch className="icon"  />
                <input 
                    type="text" 
                    placeholder="Søg i favoritter" 
                    className='search-favourites__input-field'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        onSearch(e.target.value);
                    }}
                />
            </div>
        </section>
    )

}