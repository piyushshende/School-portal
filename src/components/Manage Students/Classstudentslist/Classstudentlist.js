import React from "react";
import '../../../commontoall.css';
import Classesandsections from "../Classesandsections";

const Classstudentlist = ()=>{
    return(
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">CLASS STUDENTS LIST</h4>
                    </div>
                    <Classesandsections/>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Classstudentlist