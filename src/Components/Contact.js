import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();


    const submited = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v4qninc', 'template_x742f5c', form.current, 'lycBuwR0xM4eDJvrU')
            .then((result) => {
                alert("Message Sent Success");
                console.log(result.text);
                console.log('Submited');


            }, (error) => {
                alert("Error Occured")
                console.log(error.text);
            });

        e.target.reset();

    }

    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Contact</h2>
                    {/* <form action="https://formspree.io/f/xjvdraeo" method="POST"  onSubmit={submited} className="reveal-content">   // using forms free  */}
                    <form ref={form} method="POST" onSubmit={submited} className="reveal-content">
                        <div className="form-group">
                            <input autoComplete="off" required type="email" id="email" className="form-control" name="email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <input autoComplete="off" required type="text" id="name" className="form-control" name="from_name" placeholder="Name"></input>
                        </div>
                        <div className="form-group">
                            <input autoComplete="off" required type="text" id="subject" className="form-control" name="subject" placeholder="Subject"></input>
                        </div>
                        <div className="form-group">
                            <textarea autoComplete="off" className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className=" btn btn-primary">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Contact;