import './BrokerContact.sass';


export default function BrokerContact({ broker }) {

    return (
        <section className='contact-broker'>

            <h2 className='contact-broker__title'>Kontakt {broker.name}</h2>

            <form className='contact-broker__form' /* onSubmit={handleSubmit} */>

                <div className='contact-broker__form-name-email'>
                    <label>
                        <span className='contact-broker__form-label'>Navn</span>
                        <input type="text" id="fullName" name="fullName" placeholder='Indtast navn' /* onChange={handleChange} value={formData.fullName} */ autoComplete="new-text" />
                        {/* {errors.fullName && <p className='contact-broker__form-error'>{errors.fullName}</p>} */}
                    </label>

                    <label>
                        <span className='contact-broker__form-label'>Email adresse</span>
                        <input type="email" id="email" name="email" placeholder='Indtast email' /* onChange={handleChange} value={formData.email} */ autoComplete="new-text" />
                        {/* {errors.email && <p className='contact-broker__form-error'>{errors.email}</p>} */}
                    </label>
                </div>
                
                <label>
                    <span className='contact-broker__form-label'>Emne</span>
                    <input type="text" id="subject" name="subject" placeholder='Hvad drejer din henvendelse sig om?' /* onChange={handleChange} value={formData.subject} */ autoComplete="new-text" />
                    {/* {errors.subject && <p className='contact-broker__form-error'>{errors.subject}</p>} */}
                </label>

                <label>
                    <span className='contact-broker__form-label'>Besked</span>
                    <textarea name="message" id="message" placeholder='Skriv din besked her...' /* onChange={handleChange} value={formData.message} */></textarea>
                    {/* {errors.message && <p className='contact-broker__form-error'>{errors.message}</p>} */}
                </label>

                <button type="submit" className='contact-broker__form-button'>Send besked</button>
            
            </form>

        </section>
    )

}