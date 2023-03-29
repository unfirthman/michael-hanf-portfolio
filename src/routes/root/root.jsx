import React, { Component } from "react";
import TypeIt from "typeit-react";
import "./root.css";

export default class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <ul id="nav" classname="nav">
                            <li classname="current">
                                <a classname="smoothscroll" href="#home">
                                    home
                                </a>
                            </li>
                            <li>
                                <a classname="smoothscroll" href="#about">
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
                                            .pause(2000)
                                            .delete(36)
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
