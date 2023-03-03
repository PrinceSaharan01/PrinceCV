import React from "react";

const Contact = () => {
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Contact</h2>
                    <form action="https://forms.gle/ZffvZDNfGNGTMjMb7" className="reveal-content">
                        <div className="form-group">
                            <input type="email" className="form-control" name="Email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="Name" placeholder="Name"></input>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="Subject" placeholder="Subject"></input>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="Message"  rows="5" placeholder="Enter your message"></textarea>
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