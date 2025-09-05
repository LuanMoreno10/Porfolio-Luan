import React from "react";
import '../styles.css';

export default function Contact(){
    return (
        <section className="contact-centered">
            <h1 className="contact-title">Contact</h1>
            <a href="https://wa.me/+351932463605"
               target="_blank"
               rel="noopener noreferrer"
               className="whatsapp-btn"
               aria-label="WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </section>
    );
}