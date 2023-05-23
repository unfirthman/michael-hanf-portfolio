

import React, { Component } from "react";
import { Document, Page } from 'react-pdf';
import Navbar from "../../navBar/Navbar";
import './Resume.css'


export default class About extends Component {
    render() {
        return (
            <div >
                <>
                    <Navbar />
                </>
                <div className="main">
                    <div className="resume-div">
                        <img src="/MH_Resume_.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
}
