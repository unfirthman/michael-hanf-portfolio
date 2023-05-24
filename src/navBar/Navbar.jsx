import React from "react";
import "../routes/root/root.css";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/michael-hanf-portfolio/about">about</a>
                </li>
                <li>
                    <a href="/michael-hanf-portfolio/resume">resume</a>
                </li>
                <li>
                    <a href="/michael-hanf-portfolio/portfolio">portfolio</a>
                </li>
                <li>
                    <a href="/michael-hanf-portfolio/contact">contact</a>
                </li>
                <li>
                    <a href="/michael-hanf-portfolio/blog">blog</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
