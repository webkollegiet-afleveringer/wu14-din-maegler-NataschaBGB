import { Link } from 'react-router';
import './HighlightedHomes.sass';
import Home from '../Home/Home';


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
                    {/* get 4 highlighted homes data from api and loop through them */}
                    {list.map((home) => (
                        <Home key={home.id} home={home} />
                    ))}
                </section>

                <Link to="/homes">Se alle boliger</Link>
            
            </div>
            
        </section>
    )

}