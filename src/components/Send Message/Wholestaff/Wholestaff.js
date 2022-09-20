import React, { useState } from "react";
import '../../../commontoall.css';
import Selectcontact from "../Selectcontact";
import Studentfilters from "../Studentfilters";
import Mail from "../Mail";
import Card from "../Card";

const Wholestaff = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Send to All Staff</h4>
                    </div>
                    <div className="mt-3 d-flex flex-column">
                            <h5 className="text-secondary d-flex flex-start">SEND TO ALL STAFF</h5>
                            <Card />
                            <Selectcontact />
                            <Studentfilters />
                            <hr />
                            <Mail />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Wholestaff