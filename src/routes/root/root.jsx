import React, { Component } from "react";
import TypeIt from "typeit-react";
import "./root.css";

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                            Show navigation
                        </a>
                        <a className="mobile-btn" href="#" title="Hide navigation">
                            Hide navigation
                        </a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Michael Hanf</h1>
                            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                                <TypeIt
                                    getBeforeInit={(instance) => {
                                        instance
                                            .type("Software Engineer")
                                            .pause(750)
                                            .break()
                                            .pause(750)
                                            .type("Web Dev")
                                            .pause(750)
                                            .break()
                                            .pause(750)
                                            .type("Musicain")
                                            .pause(750)
                                            .delete(3)
                                            .pause(500)
                                            .type("ian")
                                            .pause(500)
                                            .delete(26)
                                            .go();
                                        instance.reset
                                        // Remember to return it!
                                        return instance
                                    }}
                                />
                            </h3>
                            <hr />
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
