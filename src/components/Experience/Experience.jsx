import experienceImage from '../../assets/experience.png';
import { BsHouseAddFill } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import './Experience.sass';


export default function Experience() {

    return (
        <section className="experience">
            
            <article className='experience__intro'>
                <img src={experienceImage} alt="Experience" />
                <div className="experience__content">
                    <h2>Vi har fulgt danskernes hjem i snart 4 årtier</h2>
                    <h3>Det synes vi siger noget om os!</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="experience__homes">
                        <div className="experience__homes-sold">
                            <BsHouseAddFill className='icon' />
                            <h4>4829</h4>
                            <p>Boliger solgt</p>
                        </div>
                        <div className="experience__homes-for-sale">
                            <FaHome className='icon' />
                            <h4>158</h4>
                            <p>Boliger til salg</p>
                        </div>
                    </div>
                </div>
            </article>

            <hr/>

            <section className='experience__steps'>
                <article className='experience__salescheck'>
                    <FaHandHoldingUsd className='icon' />
                    <h3>Bestil et salgstjek</h3>
                    <p>Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
                </article>
                <article className='experience__stores'>
                    <ImLocation className='icon' />
                    <h3>74 butikker</h3>
                    <p>Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                </article>
                <article className='experience__buyer-directory'>
                    <BsPersonFillAdd className='icon' />
                    <h3>Tilmeld køberkartotek</h3>
                    <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                </article>
            </section>

        </section>
    )

}