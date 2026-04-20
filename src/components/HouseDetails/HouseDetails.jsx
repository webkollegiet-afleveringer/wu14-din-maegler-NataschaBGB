import './HouseDetails.sass';
import { PiImageThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import ResponsibleBroker from '../ResponsibleBroker/ResponsibleBroker';
import { useState } from 'react';
import OverlayViewer from '../OverlayViewer/OverlayViewer';


export default function HouseDetails({ home }) {

    const [activeView, setActiveView] = useState(null);

    return (
        <section className="house-details">

            <OverlayViewer
                activeView={activeView}
                home={home}
                onClose={() => setActiveView(null)}
                onChangeView={(view) => setActiveView(view)}
            />

            <img src={home.images[0].url} alt={home.title} className='house-details__hero-image' />

            <article className='house-details__container'>

                <section className='house-details__header'>
                    <div className='house-details__header-address'>
                        <h1>{home.adress1 ? home.adress1 : "Addresse ikke tilgængelig"}</h1>
                        <h2>{home.postalcode ? home.postalcode : "Postnummer ikke tilgængeligt"} {home.city ? home.city : "By ikke tilgængelig"}</h2>
                    </div>

                    <div className='house-details__header-icons'>
                        <PiImageThin
                            className="icon"
                            onClick={() => setActiveView("gallery")}
                        />
                        <IoLayersOutline
                            className="icon"
                            onClick={() => setActiveView("floorplans")}
                        />
                        <IoLocationOutline 
                            className="icon"
                            /* onClick={() => setActiveView("map")} */
                        />
                        {/* if this is a favorite property, display filled heart; otherwise, display outlined heart */}
                        <IoHeartOutline className="icon" />
                    </div>

                    <div className='house-details__header-price'>
                        <h3>Kr. {home.price ? home.price.toLocaleString('da-DK') : "Pris ikke tilgængelig"}</h3>
                    </div>
                </section>

                <section className='house-details__info'>
                    <table className='house-details__info-main'>
                        <tbody>
                            <tr>
                                <td>Sagsnummer:</td>
                                <td>{home.id ? home.id : "Ikke tilgængeligt"}</td>
                            </tr>
                            <tr>
                                <td>Boligareal:</td>
                                <td>{home.livingspace ? `${home.livingspace} m²` : "Ikke tilgængeligt"}</td>
                            </tr>
                            <tr>
                                <td>Grundareal:</td>
                                <td>{home.lotsize ? `${home.lotsize} m²` : "Ikke tilgængeligt"}</td>
                            </tr>
                            <tr>
                                <td>Rum/værelser:</td>
                                <td>{home.rooms ? `${home.rooms}` : "Ikke tilgængeligt"}</td>
                            </tr>
                        </tbody>
                        {/* Antal plan: {home.floors} */}
                    </table>

                    <table className='house-details__info-additional'>
                        <tbody>
                            <tr>
                                <td>Kælder:</td>
                                <td>{home.basementsize ? `${home.basementsize} m²` : "-"}</td>
                            </tr>
                            <tr>
                                <td>Byggeår:</td>
                                <td>{home.built ? home.built : "-"}</td>
                            </tr>
                            <tr>
                                <td>Ombygget:</td>
                                <td>{home.remodel ? home.remodel : "-"}</td>
                            </tr>
                            <tr>
                                <td>Energimærke:</td>
                                <td>{home.energylabel ? home.energylabel : "-"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className='house-details__info-financial'>
                        <tbody>
                            <tr>
                                <td>Udbetaling:</td>
                                <td>Kr. {home.payment ? home.payment.toLocaleString('da-DK') : "-"}</td>
                            </tr>
                            <tr>
                                <td>Brutto ex. ejerudgift:</td>
                                <td>Kr. {home.gross ? home.gross.toLocaleString('da-DK') : "-"}</td>
                            </tr>
                            <tr>
                                <td>Netto ex. ejerudgift:</td>
                                <td>Kr. {home.netto ? home.netto.toLocaleString('da-DK') : "-"}</td>
                            </tr>
                            <tr>
                                <td>Ejerudgifter:</td>
                                <td>Kr. {home.cost ? home.cost.toLocaleString('da-DK') : "-"}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className='house-details__description-and-broker'>
                    <div className='house-details__description'>
                        <h2>Beskrivelse</h2>
                        <p>{home.description ? home.description : "Ingen beskrivelse tilgængelig"}</p>
                    </div>

                    <div className='house-details__broker'>
                        <h2>Ansvarlig Mægler</h2>
                        <div className='house-details__broker-info'>
                            {home.agent ? <ResponsibleBroker broker={home.agent} /> : <p>Mægler ikke tilgængelig</p>}
                        </div>
                    </div>

                </section>

            </article>
        </section>
    )

}