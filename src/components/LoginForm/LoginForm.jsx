import { useState } from 'react';
import './LoginForm.sass';
import { Link } from 'react-router';


export default function LoginForm() {
    

    // curl for logging in:
    // curl "https://dinmaegler.onrender.com/auth/local" \
    //     -H 'Content-Type: application/json' \
    //     -X POST \
    //     -d '{
    //     "identifier": "carsten@mail.dk",
    //     "password" : "654321"
    // }'


    // REGISTER
    // Full name, email, password, confirm password


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
        // console.log(formData);
        // set validationError to the result of validateForm function, with formData as the argument
        const validationError = validateForm(formData);
        // set the errors state to the validationError object returned by the validateForm function - this will trigger a re-render of the component and display the error messages next to the form fields
        setErrors(validationError);

        // Object.keys(validationError) = an array of the keys in the validationError object (e.g. ['email', 'password'])
        // if the length of the array is 0, it means there are no validation errors and the form is valid
        if (Object.keys(validationError).length === 0) {
            console.log('Form is valid, submitting data:', formData);
            // try {
            //     console.log('Form is valid, submitting data:', formData);
            //     // Perform login or registration logic here
            //     // Example: call an API endpoint to submit the form data
            //     fetch('https://dinmaegler.onrender.com/auth/local', {
            //             method: 'POST',
            //             headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             identifier: formData.email,
            //             password: formData.password
            //         })
            //     })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Login successful:', data);
            //         // Redirect to homepage or show success message
            //     })
            // }
            // catch (error) {
            //     console.error('An error occurred during form submission:', error);
            //     // Show error message to the user
            // }

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

        // if the email field is empty or only contains whitespace, add an error message to the errors object with the key 'email'
        if (!data.email.trim()) {
            errors.email = 'Email er påkrævet';
        }
        // else if the email field does not match a basic email format regex pattern, add an error message to the errors object with the key 'email'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Ugyldig email format';
        }
        // if the password field is empty or only contains whitespace, add an error message to the errors object with the key 'password'
        if (!data.password.trim()) {
            errors.password = 'Password er påkrævet';
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

        <section className='login-form'>

            <h1>Log ind på din konto</h1>

            <form className='login-form__form' onSubmit={handleSubmit}>

                <label>
                    <span className='login-form__label'>Email</span>
                    <input type="email" id="email" name="email" placeholder='Email' onChange={handleChange} value={formData.email} autoComplete="new-text" />
                    {errors.email && <p className='login-form__error'>{errors.email}</p>}
                </label>
                
                <label>
                    <span className='login-form__label'>Password</span>
                    <input type="password" id="password" name="password" placeholder='Password' onChange={handleChange} value={formData.password} autoComplete="new-password" />
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