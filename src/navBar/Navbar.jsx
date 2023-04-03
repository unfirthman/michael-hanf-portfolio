

import React from 'react';
import '../routes/root/root.css'

const Navbar = () => {
return (
                    <nav id="nav-wrap">
                        <ul id="nav" classname="nav">
                            <li classname="current">
                                <a classname="smoothscroll" href="/">
                                    home
                                </a>
                            </li>
                            <li>
                                <a classname="smoothscroll" href="/about">
                                    about
                                </a>
                            </li>
                            <li>
                                <a classname="smoothscroll" href="#resume">
                                    resume
                                </a>
                            </li>
                            <li>
                                <a classname="smoothscroll" href="#portfolio">
                                    works
                                </a>
                            </li>
                            <li>
                                <a classname="smoothscroll" href="#contact">
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

