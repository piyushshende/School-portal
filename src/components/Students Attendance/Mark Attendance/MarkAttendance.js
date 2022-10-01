import React, { useState, useEffect } from "react";
import Classesandsections from "../../Manage Students/Classesandsections";

const MarkAttendance = () => {
    const [standard, setStandard] = useState("");

    useEffect(() => {
        console.log("onMount:" + standard);
    }, [standard]);

    const handleCallBack = (data) => {
        console.log(data);
        setStandard(data[data.length - 1]);
    }
    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3">MARK ATTENDANCE</h4>
                </div>
                <Classesandsections parentCallBack={handleCallBack} />
                <hr />
                <div className="row">
                    <div className="col d-flex justify-content-start align-items-center">
                        <h5 className="text-secondary">Standard: {standard}</h5>
                    </div>

                    <div className="d-flex flex-column col justify-content-start align-items-start text-secondary">
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" className="w-100" />
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </div>
    )
}

export default MarkAttendance;