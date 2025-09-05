import React from "react";
import "../styles.css";

export default function Navbar(){
    const [open, setOpen] = React.useState(false);

    return (
        <div className="navbar">
            <div className="container navbar-inner">
                <div className="brand">
                    <img src="https://t3.ftcdn.net/jpg/04/14/31/14/360_F_414311466_I2YJBZGnRXgrTHC61dj1B7UhhMUnQmkY.jpg" alt="Logo" className="site-logo" />
                    <span className="logo"/>Luan Moreno
                </div>
                <nav className="nav desktop-nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button
                    className={`hamburger mobile-only ${open ? "open" : ""}`}
                    onClick={() => setOpen(true)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <nav className={`side-drawer ${open ? "open" : ""}`}>
                <button
                    className="close-btn"
                    onClick={() => setOpen(false)}
                    aria-label="close menu"
                >
                    &times;
                </button>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </nav>
        </div>
    );
}