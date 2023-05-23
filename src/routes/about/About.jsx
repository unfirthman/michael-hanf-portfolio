
import React, { Component } from "react";
import "./About.css";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../../navBar/Navbar";


export default class About extends Component {
    render() {
        return (
            <div >
                <>
                    <Navbar />
                </>
                <div className="main">

                    <div className="about-me">
                        <h2>About Me</h2>
                        <div className="profile-pic">
                            <img src='/hanf-night.jpeg' alt="My profile pic" />
                        </div>
                        <p>Hello world! I am a software developer living and Brooklyn. I am a NeoVim enthusiast and Linux-head. Javascript is cool. Python is dope. I also enjoy combining music and technology, using DIY and open source principles.</p>

                        <div>
                            <div className="contact-details">
                                <h2>Contact Details</h2>
                                <p>
                                    <span>Brooklyn</span>
                                    <br></br>
                                    <br></br>
                                    <span>www.mikehanf.com</span>
                                </p>
                            </div>
                        </div>
                        <div>
                          <h2>Check out my GitHub contributions</h2>
                            <div className="github-container">
                                <div className="github-contributions">
                                    <GitHubCalendar username="unfirthman" />
                                </div>
                            </div>
                        </div>
                            <p>
                                I work on some cool projects. Including this website, which is hand made with love. I also have done music things and have a whole 'nother website dedicated to that.
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}
