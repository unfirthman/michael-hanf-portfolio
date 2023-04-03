import React, { Component } from "react";
import TypeIt from "typeit-react";
import "./root.css";
import Navbar from "../../navBar/Navbar";

export default class Root extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar />
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
