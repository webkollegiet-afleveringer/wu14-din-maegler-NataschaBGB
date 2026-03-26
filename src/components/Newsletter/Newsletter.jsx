import { FaArrowRightLong } from "react-icons/fa6";
import './Newsletter.sass';


export default function Newsletter() {

    // The option to sign up for the newsletter (endpoint to be created on the API)
    // extra task: add an option to unsubscribe from the newsletter. You decide where and how.


    return (
        <section className='newsletter'>
            <div className="container">
                
                <h2>Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>

                <div className="newsletter__form">
                    <input type="email" placeholder="Indtast din email adresse" />
                    <button><FaArrowRightLong /></button>
                </div>
            
            </div>
        </section>
    )

}