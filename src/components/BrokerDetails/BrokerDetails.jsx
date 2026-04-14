import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import './BrokerDetails.sass';
import BrokerContact from "../BrokerContact/BrokerContact";


export default function BrokerDetails({ broker }) {

    return (
        <section className="broker-details" >

            <article className="broker-details__info">
                
                <div className="broker-details__header">
                    
                    <div className="broker-details__image-container">
                        <img src={broker.image.formats.thumbnail.url} alt={broker.name} className="broker-details__image" />
                        <div className="broker-details__socials">
                            <FaInstagram className="icon" />
                            <FaLinkedinIn className="icon" />
                            <FaSkype className="icon" />
                        </div>
                    </div>
                    
                    <div className="broker-details__header-text">
                        <h1 className="broker-details__name">{broker.name}</h1>
                        <p className="broker-details__title">{broker.title}</p>
                    </div>
                    <div className="broker-details__contact">
                        <p><a href={`tel:${broker.phone}`}> <FaPhoneAlt className="icon" /> {broker.phone}</a></p>
                        <p><a href={`mailto:${broker.email}`}> <IoIosPaperPlane className="email-icon" /> {broker.email}</a></p>
                    </div>
                </div>
                
            </article>

            <article className="broker-details__description">
                <h2>Om {broker.name}</h2>
                <p>{broker.description}</p>
            </article>

            <BrokerContact broker={broker} />

        </section>
    )

}