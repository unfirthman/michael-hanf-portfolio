
import React, { Component } from 'react';
import "../../App.css"


export default class About extends Component {
  render() {

    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="./hanf-night.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
                            Hello world! I am a software developer living and Brooklyn.
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Brooklyn</span>
                     <br></br>
                    <br></br>
                    <span>www.mikehanf.com</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
