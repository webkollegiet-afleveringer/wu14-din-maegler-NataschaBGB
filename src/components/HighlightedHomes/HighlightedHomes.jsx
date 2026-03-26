import { Link } from 'react-router';
import HouseCard from '../HouseCard/HouseCard';
import './HighlightedHomes.sass';


export default function HighlightedHomes({ homes }) {

    return (
        <section className='highlighted-homes'>
            
            <div className="container">

                <h2 className='highlighted-homes__title'>Udvalgte boliger</h2>
                <p className='highlighted-homes__subtitle'>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>

                <section className='highlighted-homes__homes'>
                    {/* loop through homes variable which gets its data from the parent component */}
                    {homes.map(home => (
                        // set home from HouseCard to home from the map function
                        <HouseCard key={home.id} home={home} />
                    ))}
                </section>

                <Link to="/houses" className='highlighted-homes__button'>Se alle boliger</Link>
            
            </div>
            
        </section>
    )

}