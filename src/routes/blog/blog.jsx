import React, { Component } from "react";
import Navbar from "../../navBar/Navbar";
import "./blog.css";
import HeadlessChromebook from "./posts/headlessChromebook/headlessChromebook";

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Navbar />
                </div>
                <div className="post">
                    <HeadlessChromebook />
                </div>
            </div>
        );
    }
}
