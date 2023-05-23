import React, { Component } from "react";
import TypeIt from "typeit-react";
import "./root.css";
import Navbar from "../../navBar/Navbar";
import { FaGithub, FaLinkedin, FaUbuntu } from "react-icons/fa";
import { IconContext } from "react-icons";

export default class Root extends Component {
    render() {
        return (
            <div className="home-bg">
                <div className="nav-bar">
                    <Navbar />
                </div>
                <main>
                    <header>
                        <h1 className="name-title">Michael Hanf</h1>
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
                                    instance.reset;
                                    // Remember to return it!
                                    return instance;
                                }}
                            />
                        </h3>
                    </header>
                    <div>
                        <IconContext.Provider
                            value={{ style: { fontSize: "80px", color: "rgba(85, 85, 85, 0.75)" } }}
                        >
                            <div className="socials">
                                <a className="socials-link" href="https://www.linkedin.com/in/mikehanf/">
                                    <FaLinkedin />
                                </a>
                                <a className="socials-link" href="https://github.com/unfirthman/">
                                    <FaGithub />
                                </a>
                                <a className="socials-link" href="https://launchpad.net/~unfirthman">
                                    <FaUbuntu />
                                </a>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <h2>Thanks for visiting! If you're looking for my music site, click below:</h2>
                    <a href="http://www.mikehanf.com" alt="">
                        My music site
                    </a>
                </main>
            </div>
        );
    }
}
