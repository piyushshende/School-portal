import React from "react";

const Markstaffattendance = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top align-items-center">
                        <h4 className="h4 mx-3">Mark Staff Attendance</h4>
                    </div>
                    <div className="mt-3">
                        <div className="d-flex align-items-center">
                            <input type="text" className="w-75"/>
                            <button className="btn btn-primary w-auto ms-5 rounded-pill">GET DATA</button>
                        </div>
                        <hr />
                        <div className="mt-3 text-secondary text-start">
                            <h6 className="mt-3 text-secondary ">Date:</h6>
                            <input type="date" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Markstaffattendance