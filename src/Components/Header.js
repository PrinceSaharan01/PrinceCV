import React from "react";
import gmail from "../images/maildark.png"

const Header = () => {

    return (
        <div>

            <header className="white-text-container section-container">
                <div className="text-center">
                    <h1>I am Prince</h1>
                    <p>React Web Developer</p>
                    <p>
                        <a className="fa-icon fa-icon-2x" href="https://github.com/PrinceSaharan01" ><i className="fa fa-github"></i></a>
                        <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/prince-saharan-a5833a246"> <i className="fa fa-linkedin"></i></a>
                        <a className="fa-icon fa-icon-2x" href=" mailto: prince.saharan2580@gmail.com"><img className="logos" src={gmail}></img></a>
                   
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Header;