import React from "react";
//import "../stylesheets/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us:</h2>

      <div className="contactInfo">
        <p>
          <strong>Email:</strong>
          <br />
          yourlawnguy@business.com
        </p>
        <br />
        <p>
          <strong>Phone:</strong>
          <br />
          (111) 222 - 3333
        </p>
        <br />
        <p>
          You can also check us out on social media by selecting the icons down
          below
        </p>
      </div>
    </div>
  );
}

export default Contact;