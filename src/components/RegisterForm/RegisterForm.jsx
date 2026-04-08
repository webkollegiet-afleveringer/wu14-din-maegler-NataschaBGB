import { useState } from 'react';
import './RegisterForm.sass';


export default function RegisterForm() {
    
    // formData state to hold the values of the form fields
    // setFormData function to update the formData state when the user types in the form fields
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            // Perform login or registration logic here
            // Example: call an API endpoint to submit the form data
            // API ENDPOINT FOR NEW USER IS UNKNOWN
            // fetch('https://dinmaegler.onrender.com/register', {
            //     method: 'POST',
            //     headers: {
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
            // .catch(error => {
            //     console.error('Login failed:', error);
            //     // Show error message to the user
            // });

            // if registration is successful, redirect to the homepage or show a success message
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

        // if the fullName field is empty or only contains whitespace, add an error message to the errors object with the key 'fullName'
        if (!data.fullName.trim()) {
            errors.fullName = 'Fulde navn er påkrævet';
        }
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
        // if the confirmPassword field is empty or only contains whitespace, add an error message to the errors object with the key 'confirmPassword'
        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = 'Bekræft password er påkrævet';
        }
        // if the password and confirmPassword fields do not match, add an error message to the errors object with the key 'confirmPassword'
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords matcher ikke';
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

        <section className='register-form'>

            <h1>Opret bruger hos Din Mægler</h1>

            <form className='register-form__form' onSubmit={handleSubmit}>

                <label>
                    <span className='register-form__label'>Fulde navn</span>
                    <input type="text" id="fullName" name="fullName" placeholder='Fulde navn' onChange={handleChange} value={formData.fullName} autoComplete="new-text" />
                    {errors.fullName && <p className='register-form__error'>{errors.fullName}</p>}
                </label>

                <label>
                    <span className='register-form__label'>Email adresse</span>
                    <input type="email" id="email" name="email" placeholder='Email adresse' onChange={handleChange} value={formData.email} autoComplete="new-text" />
                    {errors.email && <p className='register-form__error'>{errors.email}</p>}
                </label>
                
                <label>
                    <span className='register-form__label'>Password</span>
                    <input type="password" id="password" name="password" placeholder='Password' onChange={handleChange} value={formData.password} autoComplete="new-password" />
                    {errors.password && <p className='register-form__error'>{errors.password}</p>}
                </label>

                <label>
                    <span className='register-form__label'>Bekræft Password</span>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Bekræft Password' onChange={handleChange} value={formData.confirmPassword} autoComplete="new-password" />
                    {errors.confirmPassword && <p className='register-form__error'>{errors.confirmPassword}</p>}
                </label>

                <button type="submit" className='register-form__button'>Opret konto</button>
            
            </form>

        </section>

        


    )

}