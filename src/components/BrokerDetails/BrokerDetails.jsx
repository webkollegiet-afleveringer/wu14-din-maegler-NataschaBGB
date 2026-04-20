import './BrokerDetails.sass';
import BrokerContact from "../BrokerContact/BrokerContact";
import ResponsibleBroker from "../ResponsibleBroker/ResponsibleBroker";


export default function BrokerDetails({ broker }) {

    return (
        <section className="broker-details" >

            <ResponsibleBroker broker={broker} />

            <article className="broker-details__description">
                <h2>Om {broker.name}</h2>
                <p>{broker.description}</p>
            </article>

            <BrokerContact broker={broker} />

        </section>
    )

}