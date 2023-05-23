import React, { useRef } from "react";
import "./Contact.scss";
import Navbar from "../../navBar/Navbar";

function Contact() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
      event.preventDefault()

      const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
            }
      alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
}

    return (
        <div>
            <>
                <Navbar />
            </>
            <div className="container">
                <h1>Contact us</h1>

                <form className="form">
                    <div className="name">
                        <label htmlFor="firstName">First name</label>
                        <input
                            ref={firstNameRef}
                            type="text"
                            name="firstName"
                            className="firstName"
                            tabIndex="1"
                        />
                        <label htmlFor="lastName">Last name</label>
                        <input
                            ref={lastNameRef}
                            type="text"
                            name="lastName"
                            className="lastName"
                            tabIndex="2"
                        />
                    </div>
                    <label htmlFor="email">Email</label>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="example@corp.com"
                        tabIndex="3"
                    />
                    <label htmlFor="message">Message</label>

                    <textarea
                        ref={messageRef}
                        placeholder="Start typing..."
                        className="message"
                        name="message"
                    />
                    <button type="submit" className="send">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Contact;
