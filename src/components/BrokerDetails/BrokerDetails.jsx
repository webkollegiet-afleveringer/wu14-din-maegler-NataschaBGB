import { useParams } from 'react-router';
import './BrokerDetails.sass';


export default function BrokerDetails({ broker }) {

    // const { brokerId } = useParams();
    // console.log(brokerId);

    return (
        <section className="broker-details-page" >
            <h1>{broker.name}</h1>
        </section>
    )

}