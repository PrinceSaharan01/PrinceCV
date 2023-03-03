import React from "react";

const Language = () => {
    return (
        // <div>
        //     <h5>Language Skills</h5>
        //     <ul>
        //         <li>Hindi(Mother Tongue)</li>
        //         <li>English</li>
        //         <li>Malayalam</li>
        //     </ul>
        // </div>
        <>
            <div className="card">
                <div className="card-block">
                    <h2>Language</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="language-experience">
                                <h3 className="h5">English  <small>Bilingual</small></h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="language-experience">
                                <h3 className="h5">Hindi  <small>Fluent</small></h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="language-experience">
                                <h3 className="h5">Malayalam  <small>Moderate</small></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default Language;