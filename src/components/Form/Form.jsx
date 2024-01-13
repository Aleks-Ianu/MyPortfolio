import React, { useState } from "react";
import "./style.css";

function Form() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Hi ${formData.firstName} ${formData.lastName}, thanks for your message, I will be in touch with you.`);
    setFormData({
      firstName: "",
      lastName: "",
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hi {formData.firstName} {formData.lastName},let's get in touch.
      </p>
      <form className="form">
        <label for="name">Enter Your Name:</label>
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          autoComplete="name"
        />
        <label for="lastName">Enter Your Last Name:</label>
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          autoComplete="family-name"
        />
        <label for="email">Enter Your Email:</label>
        <input
          value={formData.email}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        <label for="floatingTextarea">Enter your message:</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            autoComplete="off"
          ></textarea>
        </div>

        <button id="btn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
