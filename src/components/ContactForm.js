import React from "react";
import "../Css/ContactForm.css";

function ContactForm() {
    return (
        <>
            <section className="get-in-touch">
                <h1 className="title">Me contacter</h1>
                <form className="contact-form row">
                    <div className="form-field col x-50">
                        <input id="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Nom</label>
                    </div>

                    <div className="form-field col x-50">
                        <input id="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-field col x-100">
                        <input id="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>

                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </section>
            <p className="note">
                Based on <a className="link" href="http://redcollar.digital/contacts/" target="_blank" rel="noopener noreferrer">Red Collar Contact Form</a>.
            </p>
        </>
    );
}

export default ContactForm;
