import React from "react";

const Contact = () => {

    // const submitted=() => {

    //     setTimeout(() => {


    //         <div className="alert alert-success" role="alert">
    //             This is a success alert—check it out!
    //         </div>

    //     }, 1500);
    // }
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Contact</h2>
                    <form action="https://formspree.io/f/xjvdraeo" method="POST" className="reveal-content">
                        <div className="form-group">
                            <input autoComplete="off" required  type="email" id="email" className="form-control" name="Email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <input autoComplete="off" required type="text" id="name" className="form-control" name="Name" placeholder="Name"></input>
                        </div>
                        <div className="form-group">
                            <input autoComplete="off" required type="text" id="subject" className="form-control" name="Subject" placeholder="Subject"></input>
                        </div>
                        <div className="form-group">
                            <textarea autoComplete="off" required className="form-control" id="message"  name="Message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="form-group">
                            <button  type="submit" className=" btn btn-primary">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Contact;