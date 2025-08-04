//Import React and useState hook for managing form submission state
import React, { useState } from "react";
import "../stylesheets/Form.css";

function Form() {
  //State to manage form submission status
  const [submitted, setSubmitted] = useState(false);

  //Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); //Prevent page from reloading
    setSubmitted(true); //Update state to show confirmation message
    event.target.reset(); //Reset the form fields after submission
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}> {/* Runs handleSubmit when submitted */}
        <fieldset>
          <legend>Request A Quote:</legend>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required //Ensures the field is filled out
            minLength="2" //Minimum length for the name
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            required
          />

          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="tel"
            id="phoneNum"
            name="phoneNum"
            placeholder="xxx-xxx-xxxx"
            required
            minLength="10"
          />

          <legend>Property Type:</legend>
          <div className="radioGroup">
            <label>
              <input
                type="radio"
                name="propertyType"
                value="residential"
                required //Ensures one option is selected
              />
              Residential
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="commercial"
                required
              />
              Commercial
            </label>
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>

      {/* Confirmation message displayed after form submission */}
      {submitted && (
        <p className="confirmation">Thank you for your submission!</p>
      )}
    </div>
  );
}

export default Form;
