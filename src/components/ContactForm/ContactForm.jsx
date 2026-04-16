import { useState } from 'react';
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
        // console.log(formData);
        // set validationError to the result of validateForm function, with formData as the argument
        const validationError = validateForm(formData);
        // set the errors state to the validationError object returned by the validateForm function - this will trigger a re-render of the component and display the error messages next to the form fields
        setErrors(validationError);

        // Object.keys(validationError) = an array of the keys in the validationError object (e.g. ['email', 'password'])
        // if the length of the array is 0, it means there are no validation errors and the form is valid
        if (Object.keys(validationError).length === 0) {
            console.log('Form is valid, submitting data:', formData);
        }
        // if the length of the array is greater than 0, it means there are validation errors and the form is not valid
        else {
            console.log('Form has validation errors:', validationError);
        }
    };

    // validateForm function to validate the form data
    // data parameter is the formData object containing the values of the form fields
    const validateForm = (data) => {
        // errors object to hold the validation error messages for each form field
        const errors = {};

        // if the name field is empty or only contains whitespace, add an error message to the errors object with the key 'name'
        if (!data.name.trim()) {
            errors.name = 'Navn er påkrævet';
        }
        
        // if the email field is empty or only contains whitespace, add an error message to the errors object with the key 'email'
        if (!data.email.trim()) {
            errors.email = 'Email er påkrævet';
        }
        // else if the email field does not match a basic email format regex pattern, add an error message to the errors object with the key 'email'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Ugyldig email format';
        }
        // if the subject field is empty or only contains whitespace, add an error message to the errors object with the key 'subject'
        if (!data.subject.trim()) {
            errors.subject = 'Emne er påkrævet';
        }
        // if the message field is empty or only contains whitespace, add an error message to the errors object with the key 'message'
        if (!data.message.trim()) {
            errors.message = 'Besked er påkrævet';
        }
        // return the errors object, which will be used to update the errors state in the handleSubmit function
        return errors;
    };

    // handleChange function to update the formData state when the user types in the form fields
    // event parameter is the change event triggered by the input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <div className='contact-form__name-email'>
                <label>
                    <span className='contact-form__label'>Navn</span>
                    <input type="text" id="name" name="name" placeholder="Indtast dit navn" onChange={handleChange} value={formData.name} />
                    {errors.name && <p className='contact-form__error'>{errors.name}</p>}
                </label>
            
                <label>
                    <span className='contact-form__label'>Email</span>
                    <input type="email" id="email" name="email" placeholder="Indtast din email" onChange={handleChange} value={formData.email} />
                    {errors.email && <p className='contact-form__error'>{errors.email}</p>}
                </label>
            </div>

            <label>
                <span className='contact-form__label'>Emne</span>
                <input type="text" id="subject" name="subject" placeholder="Indtast emne" onChange={handleChange} value={formData.subject} />
                {errors.subject && <p className='contact-form__error'>{errors.subject}</p>}
            </label>
            
            <label>
                <span className='contact-form__label'>Besked</span>
                <textarea id="message" name="message" placeholder="Skriv din besked her..." onChange={handleChange} value={formData.message}></textarea>
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