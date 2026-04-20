import './Brokers.sass';
import BrokerCard from '../BrokerCard/BrokerCard';


export default function BrokersAgents({ brokers }) {

    return (
        <section className='brokers'>
            <div className="container">
                <section className='brokers__brokers'>
                    {/* map through brokers and create a BrokerCard for each broker */}
                    {brokers.brokers.map(broker => (
                        <BrokerCard key={broker.id} broker={broker} />
                    ))}
                </section>
            </div>
        </section>
    )

}