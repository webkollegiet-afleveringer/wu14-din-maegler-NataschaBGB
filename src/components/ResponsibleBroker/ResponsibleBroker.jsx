import './ResponsibleBroker.sass';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router';


export default function ResponsibleBroker({ broker }) {

    return (
        <article className="responsible-broker">
            
            <div className="responsible-broker__image-container">
                <img src={broker.image.formats.thumbnail.url} alt={broker.name} className="responsible-broker__image" />
                <div className="responsible-broker__socials">
                    <FaInstagram className="icon" />
                    <FaLinkedinIn className="icon" />
                    <FaSkype className="icon" />
                </div>
            </div>
            
            <Link className="responsible-broker__header-text">
                <h1 className="responsible-broker__name">{broker.name}</h1>
                <p className="responsible-broker__title">{broker.title}</p>
            </Link>
            <div className="responsible-broker__contact">
                <p><a href={`tel:${broker.phone}`}> <FaPhoneAlt className="icon" /> {broker.phone}</a></p>
                <p><a href={`mailto:${broker.email}`}> <IoIosPaperPlane className="email-icon" /> {broker.email}</a></p>
            </div>

        </article>
    )

}