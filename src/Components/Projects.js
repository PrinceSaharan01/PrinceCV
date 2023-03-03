import React from "react";

import github from "../images/github.png"
import dashboard from "../images/Dashboard.PNG"
import store from "../images/Store.PNG"

const Projects = () => {
    return (
        // <div >
        //     <h5 className="card-title">Projects:-</h5>


        //     <ul>
        //         <li>
        //             <h6 className="card-subtitle mb-2 text-muted"><b>React-Ecomm Dashboard</b></h6>
        //             <a href="https://github.com/PrinceSaharan01/react-dashboard" className="card-link"><img className="logos" src="github.png"></img>A Basic Ecomm Dashboard Built Using ReactJS</a>
        //         </li>
        //         <li>
        //             <h6 className="card-subtitle mb-2 text-muted"><b>Redux-Store</b></h6>
        //             <a href="https://github.com/PrinceSaharan01/react-dashboard" className="card-link"> <img className="logos" src="github.png"></img>A Basic Ecomm Dashboard Built Using Redux Toolkit</a>
        //         </li>
        //     </ul>

        // </div>

        <>

            <div className="card">
                <div className="card-block">
                    <h2>Projects</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={dashboard} className="img-responsive" alt=""></img>
                            <h3 className="h5">React-Dashboard</h3>
                            <p>Dec 2022</p>
                            <a href="https://github.com/PrinceSaharan01/react-dashboard" className="card-link"><img className="logos" src={github}></img>Core Code</a>
                        </div>
                        <div className="col-md-4">
                            <img src={store} className="img-responsive" alt=""></img>
                            <h3 className="h5">Redux-Store</h3>
                            <p>Jan 2023</p>
                            <a href="https://github.com/PrinceSaharan01/react-dashboard" className="card-link"><img className="logos" src={github}></img>Core Code</a>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )

}
export default Projects;