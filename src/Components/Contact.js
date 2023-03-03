import React, { useState } from "react";

const Contact = () => {

    
    const {data,setData} = useState("")
    return (
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Contact</h2>
                    <form action="https://formspree.io/f/xjvdraeo" method="POST"  className="reveal-content">
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
                            <textarea autoComplete="off" value={data} onChange={(e)=>setData(e.target.value)} required className="form-control" id="message"  name="Message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="form-group">
                            <button   type="submit" className=" btn btn-primary">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Contact;