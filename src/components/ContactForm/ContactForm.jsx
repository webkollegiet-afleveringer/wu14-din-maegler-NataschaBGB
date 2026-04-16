import { useState } from 'react';
import { contactSchema } from "../../validation/contactSchema";
import './ContactForm.sass';


export default function ContactForm() {

    // formData state to hold the values of the form fields
    // setFormData function to update the formData state when the user types in the form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // errors state to hold the validation error messages for each form field
    // setErrors function to update the errors state when validating the form
    const [errors, setErrors] = useState({});

    // handleSubmit function when submitting the form
    const handleSubmit = (event) => {
        // prevent the default form submission behavior
        // the default behavior would cause the page to reload, which we don't want in a React application
        event.preventDefault();

        // contactSchema.safeParse(formData) will return an object with a success property that is true if the validation passed and false if it failed, and an error property that contains the validation errors if it failed
        const result = contactSchema.safeParse(formData);

        // if the success property is true, it means the form data is valid and we can proceed with submitting the form or showing a success message
        if (result.success) {
            // clear any previous errors, because the form is now valid
            setErrors({});
            // log the valid form data to the console 
            // (in a real application, you would submit the form data to an API or perform some other action here)
            console.log('Form is valid:', result.data);
            // clear the form fields by resetting the formData state to its initial values (empty strings)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            // "return" to exit the handleSubmit function early, so that the code below that sets the errors state does not run when the form is valid
            return;
        }

         // if the success property is false, it means the form data is invalid
        // errors variable to hold the validation error messages for each form field, which we will extract from the result.error.issues array
        const errors = {};

        // loop through the result.error.issues array, which contains an object for each validation error
        for (const err of result.error.issues) {
            // field variable to hold the name of the invalid field, which is the first element of the "path" array in the error object (e.g. "email" or "password")
            const field = err.path[0];

            // if there is not already an error message for this field in the errors object, add the error message from the validation error object to the errors object with the field name as the key (e.g. errors.email = "Email is required")
            if (!errors[field]) {
                // add the error message from the validation error object to the errors object with the field name as the key (e.g. errors.email = "Email is required")
                errors[field] = err.message;
            }
        }
        
        // set the errors state to the errors object we just created, which will trigger a re-render of the component and display the error messages next to the form fields
        setErrors(errors);
    };

    // handleChange function to update the formData state when the user types in the form fields
    // event parameter is the change event triggered by the input fields
    const handleChange = (event) => {
        // destructure the "name" and "value" properties from the event.target, which is the input field that triggered the change event
        const { name, value } = event.target;
        // update the formData state by spreading the previous formData and updating the specific field that changed (using the "name" property as the key and the "value" property as the new value for that field)
        setFormData({...formData, [name]: value });
    };


    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <div className='contact-form__name-email'>
                <label>
                    <span className='contact-form__label'>Navn</span>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Indtast dit navn" 
                        onChange={handleChange}
                        value={formData.name} 
                    />
                    {errors.name && <p className='contact-form__error'>{errors.name}</p>}
                </label>
            
                <label>
                    <span className='contact-form__label'>Email</span>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Indtast din email"
                        autoComplete="new-text" 
                        onChange={handleChange} 
                        value={formData.email} 
                    />
                    {errors.email && <p className='contact-form__error'>{errors.email}</p>}
                </label>
            </div>

            <label>
                <span className='contact-form__label'>Emne</span>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Indtast emne" 
                    onChange={handleChange}
                    value={formData.subject} 
                />
                {errors.subject && <p className='contact-form__error'>{errors.subject}</p>}
            </label>
            
            <label>
                <span className='contact-form__label'>Besked</span>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Skriv din besked her..." 
                    onChange={handleChange} 
                    value={formData.message}
                ></textarea>
                {errors.message && <p className='contact-form__error'>{errors.message}</p>}
            </label>

            {/* tick to get newsletter */}
            <label className='contact-form__newsletter'>
                <input type="checkbox" id="newsletter" name="newsletter" />
                <span>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev</span>
            </label>

            <button type="submit" className='contact-form__button'>Send besked</button>
            
        </form>
    )

}