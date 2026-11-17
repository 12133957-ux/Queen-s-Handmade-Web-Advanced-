import React from 'react';
import {useState} from "react";
import '../Styles/Contact.css';

const Contact = () =>{
    const [name, setName] = useState("");
    const[message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    }
    return(
        <div className="contact-page">
            <div className="contact-card">
                <h2>Contact our Beading Studio</h2>
                <p>Have a question about bead colors, custom bag sizes, or bridal orders? send us a message!</p>

                <h4>Thank you, {name}! Our beading artisans will reply shortly.</h4>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="emal"
                    placeholder="your Email" />
                    <textarea
                    placeholder="Tell us about the beaded bag you want..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    <button type="submit">Send </button>
                </form>
            </div>
        </div>
    )

}
export default Contact;