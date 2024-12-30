import React from "react";
import mess from "../edusity_assets/msg-icon.png"
import email from "../edusity_assets/mail-icon.png"
import ph from "../edusity_assets/phone-icon.png"
import loc from "../edusity_assets/location-icon.png"
import "./contact.css"

const Contact=()=>{
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0d33d78b-0674-48a0-8ab6-3b16639df43c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
    return(<div className="contact">
        <div className="cone">
            <h2>Get in touch with us <img src={mess} alt="msg" /></h2>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={email} alt="emails" />Contact@GreatStack.dev</li>
                <li><img src={ph} alt="phone" />Phone: 123-456-7890</li>
                <li><img src={loc} alt="locs" />77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>

            </ul>
        </div>
        <div className="cone">
                <form onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input type="text"placeholder="enter name" />
                    <label>phone no:</label>
                    <input type="text" placeholder="enter your phone no:" />
                    <label>email:</label>
                    <input type="email" placeholder="enter your email" />
                    <label>message:</label>
                    <textarea placeholder="enter your message" />
                    <button type="submit">Submit</button>
                </form>
                <span>{result}</span>
        </div>
    </div>)
}
export default Contact;
