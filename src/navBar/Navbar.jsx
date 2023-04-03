

import React from 'react';
import '../routes/root/root.css'

const Navbar = () => {
return (
                    <nav id="nav-wrap">
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="/">
                                    home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="/about">
                                    about
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">
                                    resume
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    works
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">
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

