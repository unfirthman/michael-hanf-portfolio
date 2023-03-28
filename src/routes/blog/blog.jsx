import React, { Component } from "react";
import "./blog.css";
import HeadlessChromebook from "./posts/headlessChromebook/headlessChromebook";
import Header from "../root/root";

export default class Blog extends Component {
    render() {
        return (
            <div >
                <Header />
                <div className='post'>
                    <HeadlessChromebook />
                </div>
            </div>
        );
    }
}
