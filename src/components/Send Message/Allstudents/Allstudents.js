import React from "react";
import '../../../commontoall.css'
import './allstudents.css'
import Selectcontact from "../Selectcontact";
import Studentfilters from "../Studentfilters";
import Mail from "../Mail";

import Card from "../Card";
const Allstudents = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light pb-4">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Send to All Students</h4>
                    </div>
                    <div className="mt-3 d-flex flex-column">
                        <h5 className="text-secondary d-flex flex-start">SEND TO WHOLE SCHOOL</h5>
                        <Card/>
                        <Selectcontact/>
                        <Studentfilters/> 

                        <hr />

                        <Mail/>            
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Allstudents;