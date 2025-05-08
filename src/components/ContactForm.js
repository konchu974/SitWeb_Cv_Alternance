import React, { useState } from "react";
import "../Css/ContactForm.css";
import "../Css/Responssive/ResContactForm.css";


function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                alert("Votre message a été envoyé !");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Une erreur est survenue. Réessayez plus tard.");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            alert("Impossible d'envoyer le message. Vérifiez votre connexion.");
        }
    };

    return (
        
            <section className="get-in-touch">
                <h1 className="title">Me contacter</h1>
                <form className="contact-form row" onSubmit={handleSubmit}>
                    <div className="form-field col x-50">
                        <input
                            id="name"
                            className="input-text js-input"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="name">Nom</label>
                    </div>

                    <div className="form-field col x-50">
                        <input
                            id="email"
                            className="input-text js-input"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-field col x-100">
                        <input
                            id="message"
                            className="input-text js-input"
                            type="text"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="message">Message</label>
                    </div>

                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Envoyer" />
                    </div>
                </form>
            </section>
        
    );
}

export default ContactForm;