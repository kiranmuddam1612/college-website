import React, { useState } from "react";
import message from "../edusity_assets/msg-icon.png";
import email from "../edusity_assets/mail-icon.png";
import phone from "../edusity_assets/phone-icon.png";
import location from "../edusity_assets/location-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0d33d78b-0674-48a0-8ab6-3b16639df43c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="d-flex justify-content-space-between align-items-centre my-2">
      <div className="row g-5">
        <div className="col-md-6">
          <h2 className="mb-4 text-primary fw-bold">
            Get in touch with us <img src={message} alt="msg" style={{ width: "30px" }} />
          </h2>
          <p className="text-secondary mb-4">
            Feel free to reach out through our contact form or find our contact information below. Your feedback,
            questions, and suggestions are important to us as we strive to provide exceptional service to our university
            community.
          </p>
          <ul className="list-unstyled text-secondary">
            <li className="mb-3 d-flex align-items-center">
              <img src={email} alt="emails" className="me-2" style={{ width: "24px" }} /> Contact@GreatStack.dev
            </li>
            <li className="mb-3 d-flex align-items-center">
              <img src={phone} alt="phone" className="me-2" style={{ width: "24px" }} /> Phone: 123-456-7890
            </li>
            <li className="d-flex align-items-center">
              <img src={location} alt="locs" className="me-2" style={{ width: "24px" }} /> 77 Massachusetts Ave, Cambridge,
              MA 02139, United States
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <form onSubmit={onSubmit} className="bg-light p-4 rounded shadow">
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" placeholder="Enter name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone No:</label>
              <input type="text" className="form-control" placeholder="Enter your phone no:" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea className="form-control" rows="4" placeholder="Enter your message" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
            <span className="d-block mt-3 text-success">{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;