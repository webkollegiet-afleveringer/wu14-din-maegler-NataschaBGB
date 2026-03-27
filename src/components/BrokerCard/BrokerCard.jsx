import { Link } from 'react-router';
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import './BrokerCard.sass';
import { useState } from 'react';


export default function BrokerCard({ broker }) {

    // state for showing email and phone number when clicking on the icons
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    const handleChange = (type) => {
        // if type is email - handleChange('email')
        if (type === 'email') {
            // !showEmail means that if showEmail is false, it will be set to true, and if it is true, it will be set to false
            setShowEmail(!showEmail);
            // when clicking on email icon, phone number should be hidden, and when clicking on phone icon, email should be hidden
            setShowPhone(false);
        }
        else if (type === 'phone') {
            setShowPhone(!showPhone);
            setShowEmail(false);
        }
    }
    
    
    return (
        <section className='broker'>
            
            {broker.image?.formats?.thumbnail?.url ? (
                <img src={broker.image.formats.thumbnail.url} alt={broker.name} />
            ) : (
                <div className='broker__no-image'>No image available</div>
            )}
            
            <div className='broker__info'>
                
                {broker.name? (
                    <Link to={`/brokers/${broker.id}`} className='broker__name'>
                        <h3>{broker.name}</h3>
                    </Link>
                ) : null}

                {broker.title ? (
                    <p className='broker__title'>{broker.title}</p>
                ) : null}
                
                <div className='broker__contact'>
                    
                    {broker.email ? (
                        // if broker has email, show email icon, and on click show email
                        <div className='broker__email' onClick={() => handleChange('email')}>
                            {/* !showEmail means that if showEmail is false, it will be set to true, and if it is true, it will be set to false */}
                            { !showEmail && <IoIosMail className='icon' /> }
                            { showEmail && <span className='broker__email-text'>
                                {broker.email}
                            </span> }
                        </div>
                    ) : null}
                    
                    {broker.phone ? (
                        // if broker has phone, show phone icon, and on click show phone number
                        <div className='broker__phone' onClick={() => handleChange('phone')}>
                            {/* !showPhone means that if showPhone is false, it will be set to true, and if it is true, it will be set to false */}
                            { !showPhone && <MdOutlinePhoneIphone className='icon' /> }
                                {/* show phone number and remove spaces */}
                            { showPhone && <span className='broker__phone-text'>
                                {broker.phone.replace(/\s/g, '')}
                            </span>}
                        </div>
                    ) : null}
                
                </div>
            </div>
        </section>
    )

}