import { Link } from 'react-router';
import BrokerCard from '../BrokerCard/BrokerCard';
import './Employees.sass';


export default function Employees({ brokers}) {

    return (
        <section className='employees'>

            <div className="container">
                
                <h2 className='employees__title'>Mød vores engagerede medarbejdere</h2>

                <p className='employees__subtitle'>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>

                <section className='employees__brokers'>
                    {brokers.map(broker => (
                        // set broker from BrokerCard to broker from the map function
                        <BrokerCard key={broker.id} broker={broker} />
                    ))}
                </section>

                <Link to="/brokers" className='employees__button'>Se alle mæglere</Link>
            
            </div>
        </section>
    )

}