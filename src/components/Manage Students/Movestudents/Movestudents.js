import React, { useState } from "react";
import '../../../commontoall.css'
import Classesandsections from "../Classesandsections";

const Movestudents = () => {
    

    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">MOVE STUDENTS</h4>
                    </div>
                    <Classesandsections/>
                    <hr />
                </div>

            </div>
        </React.Fragment>
    )
}

export default Movestudents;