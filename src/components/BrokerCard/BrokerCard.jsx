import { Link } from 'react-router';
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import './BrokerCard.sass';


export default function BrokerCard({ broker }) {
    
    return (
        <Link to={`/brokers/${broker.id}`} className='broker'>
            {broker.image?.formats?.thumbnail?.url ? (
                <img src={broker.image.formats.thumbnail.url} alt={broker.name} />
            ) : (
                <div className='broker__no-image'>No image available</div>
            )}
            
            <div className='broker__info'>
                {broker.name? (
                    <h3 className='broker__name'>{broker.name}</h3>
                ) : null}

                {broker.title ? (
                    <p className='broker__title'>{broker.title}</p>
                ) : null}
                
                <div className='broker__contact'>
                    {broker.email ? (
                        <a href={`mailto:${broker.email}`} className='broker__email-link'>
                            <IoIosMail />
                        </a>
                    ) : null}
                    {broker.phone ? (
                        <a href={`tel:${broker.phone}`} className='broker__phone-link'>
                            <MdOutlinePhoneIphone />
                        </a>
                    ) : null}
                </div>
                
            </div>
        </Link>
    )

}