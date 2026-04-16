import { FaArrowRightLong } from "react-icons/fa6";
import './Newsletter.sass';
import { useState } from "react";
import { newsletterSchema } from "../../validation/newsletterSchema";


export default function Newsletter() {

    // extra task: add an option to unsubscribe from the newsletter. You decide where and how.

    const [formData, setFormData] = useState({
        email: ''
    });

    // errors state to hold the validation error messages for each form field
    // setErrors function to update the errors state when validating the form
    const [errors, setErrors] = useState({});

    // on submit: post to API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // newsletterSchema.safeParse(formData) will return an object with a success property that is true if the validation passed and false if it failed, and an error property that contains the validation errors if it failed
        const result = newsletterSchema.safeParse(formData);

        // if the success property is not true, it means the form data is invalid and we need to extract the validation errors and set them in the errors state to display them to the user
        if (!result.success) {
            // errors object to hold the error messages for each field
            const errors = {};
            // loop through the validation errors in result.error.issues
            for (const err of result.error.issues) {
                // extract the field name from err.path[0] and use it as the key in the errors object
                const field = err.path[0];
                // if there is not already an error message for this field in the errors object, add the error message from the validation error object to the errors object with the field name as the key (e.g. errors.email = "Email is required") and the error message from the validation error object as the value (e.g. "Email is required")
                if (!errors[field]) errors[field] = err.message;
            }
            // update the errors state with the errors object we just created, which will trigger a re-render of the component and display the error messages next to the form fields
            setErrors(errors);
            // "return" to exit the handleSubmit function early, so that the code below that sends the form data to the API does not run when the form is invalid
            return;
        }

        // if the success property is true, it means the form data is valid and we can send it to the API
        try {
            const res = await fetch("https://dinmaegler.onrender.com/subscribers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(result.data),
            });

            // parse the response from the API as JSON and store it in a variable called "data"
            const data = await res.json();

            // if the response from the API has a status code of 200 (property 'ok' is true), it means the email was successfully added to the API's database
            if (res.ok) {
                // log the email added
                console.log("Tilmeldt Nyhedsbrev:", data);
                // clear the form fields
                setFormData({ email: "" });
                // clear any previous error messages by setting the errors state to an empty object, which will trigger a re-render of the component and remove any error messages from the UI
                setErrors({});
                // "return" to exit the handleSubmit function early, so that the code below that sets the errors state does not run when the form is valid
                return;
            }

            // if the response from the API has a status code of 500, it means the email is already subscribed to the newsletter
            if (res.status === 500) {
                // update the errors state with an error message for the email field, which will trigger a re-render of the component and display the error message next to the email input field
                setErrors({ email: "Email er allerede tilmeldt" });
                return;
            }

            // if the response from the API has a status code other than 200 or 500, it means there was an error with the request and we can set a generic error message in the errors state to display to the user
            setErrors({ email: "Noget gik galt" });

        } 
        // catch block to handle any network errors that may occur when sending the form data to the API, and set a generic error message in the errors state to display to the user if a network error occurs
        catch (error) {
            console.error(error);
            setErrors({ email: "Netværksfejl. Tjek din forbindelse." });
        }
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
        <section className='newsletter'>
            <div className="container">
                
                <h2>Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>

                <form className="newsletter__form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Indtast din email adresse" 
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <button type="submit"><FaArrowRightLong /></button>
                    {errors.email && <p className='newsletter__error'>{errors.email}</p>}
                </form>
            
            </div>
        </section>
    )

}