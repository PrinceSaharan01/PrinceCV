import React from "react";

import gmail from "../images/maildark.png"

const Footer = () => {
    return (

        <>
            <footer className="footer-container white-text-container text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <p></p>

                            <p>©All right reserved. Design </p>
                            <p>
                                <a className="fa-icon fa-icon-2x" href="https://github.com/PrinceSaharan01" ><i className="fa fa-github"></i></a>
                                <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/prince-saharan-a5833a246"> <i className="fa fa-linkedin"></i></a>
                                <a className="fa-icon fa-icon-2x" href=" mailto: prince.saharan2580@gmail.com"><img alt="" className="logos" src={gmail}  ></img></a>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;