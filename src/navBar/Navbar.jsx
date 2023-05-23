

import React from 'react';
import '../routes/root/root.css'
import './Navbar.css'

const Navbar = () => {
return (
                    <nav id="nav-wrap">
                        <ul id="nav" className="nav">
                            <li >
                                <a  href="/">
                                    home
                                </a>
                            </li>
                            <li>
                                <a  href="/about">
                                    about
                                </a>
                            </li>
                            <li>
                                <a  href="/resume">
                                    resume
                                </a>
                            </li>
                            <li>
                                <a  href="/portfolio">
                                    portfolio
                                </a>
                            </li>
                            <li>
                                <a  href="/contact">
                                    contact
                                </a>
                            </li>
                            <li>
                                <a href="/blog">blog</a>
                            </li>
                        </ul>
                    </nav>
);
};

export default Navbar;

