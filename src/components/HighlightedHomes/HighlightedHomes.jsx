import { Link } from 'react-router';
import './HighlightedHomes.sass';
import HouseCard from '../HouseCard/HouseCard';


export default function HighlightedHomes({ homes, limit }) {

    // if limit value is provided, slice the homes array to get only the provided number of homes, otherwise return the full array
    // homes.homes =>
    // the first homes is the name of the variable passed from the loader - which is an object containing the array of homes
    // the second homes is the name of the array inside the object returned by the loader
    const list = limit ? homes.homes.slice(0, limit) : homes.homes;
    

    return (
        <section className='highlighted-homes'>
            
            <div className="container">

                <h2>Udvalgte boliger</h2>
                <p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>

                <section className='highlighted-homes__homes'>
                    {/* loop through list variable which gets its limit from limit={} where HighlightedHomes component is used */}
                    {list.map((home) => (
                        // set home from HouseCard to home from the map function
                        <HouseCard key={home.id} home={home} />
                    ))}
                </section>

                <Link to="/houses" className='highlighted-homes__button'>Se alle boliger</Link>
            
            </div>
            
        </section>
    )

}