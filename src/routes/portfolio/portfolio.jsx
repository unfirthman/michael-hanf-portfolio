

import React, { Component } from "react";
import './portfolio.css'
import resumeData from './resumeData.js'
import Navbar from "../../navBar/Navbar";

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar />
                </>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Some of my work.</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {resumeData.portfolio &&
                                    resumeData.portfolio.map((item) => {
                                        return (
                                            <div className="columns portfolio-item">
                                                <div className="item-wrap">
                                                    <a
                                                        href={item.link}
                                                        // target="_blank"  /// test to see if this
                                                        // changes negative link effects
                                                        //  rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            className="item-img"
                                                            src={ item.imgurl }
                                                            alt=""
                                                        />
                                                        <div className="overlay">
                                                            <div className="portfolio-item-meta">
                                                                <h5>{item.name}</h5>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
