import React from "react";

const About = () => {

    return (
        // <div className="row">
        //     <h5>About Me:-</h5>
        //     <div className="col-sm-3">
        //         <div className="card">

        //             <img src="Prince.png"></img>
        //         </div>
        //     </div>
        //     <div className="col-sm-6">
        //         <div className="card">


        //             <p>I'm a multi-disciplinary creative person with a passion for
        //                 coding and development.I've been studying by myself,
        //                 I am currenty looking for a creative web development
        //                 position where I can be involved in strategy process and
        //                 kickstart my career in the development field.</p>
        //         </div>
        //     </div>

        // </div>




        <>

            <div className="card">
                <div className="card-block">
                    <h2>About me</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <p><img src="Prince.png" className="img-responsive" alt=""></img></p>
                        </div>
                        <div className="col-md-8">

                            <p>I'm a multi-disciplinary creative person with a passion for
                                coding and development.I've been studying by myself,
                                I am currenty looking for a creative web development
                                position where I can be involved in strategy process and
                                kickstart my career in the development field.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default About;