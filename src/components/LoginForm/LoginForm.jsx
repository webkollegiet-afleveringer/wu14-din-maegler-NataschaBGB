import { useState } from 'react';
import './LoginForm.sass';
import { Link } from 'react-router';
import { loginSchema } from '../../validation/authSchema';


export default function LoginForm() {
    

    // curl for logging in:
    // curl "https://dinmaegler.onrender.com/auth/local" \
    //     -H 'Content-Type: application/json' \
    //     -X POST \
    //     -d '{
    //     "identifier": "carsten@mail.dk",
    //     "password" : "654321"
    // }'


    // formData state to hold the values of the form fields
    // setFormData function to update the formData state when the user types in the form fields
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // errors state to hold the validation error messages for each form field
    // setErrors function to update the errors state when validating the form
    const [errors, setErrors] = useState({});

    // handleSubmit function when submitting the form
    const handleSubmit = (event) => {
        // prevent the default form submission behavior
        // the default behavior would cause the page to reload, which we don't want in a React application
        event.preventDefault();

        // loginSchema.safeParse(formData) will return an object with a success property that is true if the validation passed and false if it failed, and an error property that contains the validation errors if it failed
        const result = loginSchema.safeParse(formData);

        // if the success property is true, it means the form data is valid and we can proceed with submitting the form or showing a success message
        if (result.success) {
            // clear any previous errors, because the form is now valid
            setErrors({});
            // log the valid form data to the console 
            // (in a real application, you would submit the form data to an API or perform some other action here)
            console.log('Form is valid:', result.data);

            // Logging in a user should be posted to API, but I can't create a user and do not know the passwords for the existing users, so I will just log the valid form data to the console for now

            // // Perform login or registration logic here
            // // Example: call an API endpoint to submit the form data
            // fetch('https://dinmaegler.onrender.com/auth/local', {
            //         method: 'POST',
            //         headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         identifier: formData.email,
            //         password: formData.password
            //     })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Login successful:', data);
            //     // Redirect to homepage or show success message
            // })

            // clear the form fields by resetting the formData state to its initial values (empty strings)
            setFormData({
                email: '',
                password: ''
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

        <section className='login-form'>

            <h1>Log ind på din konto</h1>

            <form className='login-form__form' onSubmit={handleSubmit}>

                <label>
                    <span className='login-form__label'>Email</span>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder='Email' 
                        onChange={handleChange} 
                        value={formData.email} 
                        autoComplete="new-text" 
                    />
                    {errors.email && <p className='login-form__error'>{errors.email}</p>}
                </label>
                
                <label>
                    <span className='login-form__label'>Password</span>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder='Password' 
                        onChange={handleChange} 
                        value={formData.password} 
                        autoComplete="new-password" 
                    />
                    {errors.password && <p className='login-form__error'>{errors.password}</p>}
                </label>
                
                <button type="submit" className='login-form__button'>Log ind</button>
            
            </form>

            <div className='login-form__social-login'>
                <p className='login-form__label'>Log ind med</p>
                <div className='login-form__social-buttons'>
                    <button className='login-form__social-button-google'>Google</button>
                    <button className='login-form__social-button-facebook'>Facebook</button>
                    <button className='login-form__social-button-twitter'>Twitter</button>
                </div>
            </div>

            <div className='login-form__register'>
                <p>Har du ikke en konto? <Link to="/register">Opret bruger.</Link></p>
            </div>

        </section>

        


    )

}